import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../styles/GeralStyle.css';
import '../styles/LoginStyle.css';
import GeralHeader from '../GeralHeader';

import HellRed from '../media/backgrounds/HellRed.gif';
import icon_eye from '../media/icons/icon_eye.png';
import icon_eye_no from '../media/icons/icon_eye_no.png';

const TelaLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eye, setEye] = useState(true);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setEye(!eye);
    };

    const handleLogin = async () => {
        if (!email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await axios.post("http://localhost:3033/login", { email, password });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', email);
                console.log('Logado com sucesso!');
                navigate("/Biblioteca");
            } else {
                console.log('Erro ao fazer login.');
                navigate("/Error");
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Por favor, tente novamente.');
        }
    };

    return (
        <div>
            <img className="background-img" src={HellRed} alt="Background" />
            <div className='container p-0 m-0 mw-100' style={{ backgroundColor: "pink" }}>
                <GeralHeader />
            </div>
            <div className="popup-background">
                <div className="popup-content">
                    <h2 style={{ marginBottom: "10%", textShadow: "2px 2px red" }}>Komeçar</h2>
                    <input
                        className="input mouse_over"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                        <input
                            className="input mouse_over"
                            type={eye ? "password" : "text"}
                            placeholder="Senha"
                            style={{ width: "205px" }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            style={{
                                background: "none",
                                border: "none",
                                width: "auto",
                                boxShadow: "none",
                                float: "right"
                            }}
                            className="verSenha mouse_over"
                            onClick={togglePasswordVisibility}
                        >
                            <img src={eye ? icon_eye_no : icon_eye} alt="Toggle Eye Icon" />
                        </button>
                    </div>
                    <div>
                        <button className="mouse_over" onClick={handleLogin}>Konfirmar</button>
                    </div>
                    <div>
                        <Link to="/registro">
                            <button className="mouse_over">Registrar Usuário</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default TelaLogin;
