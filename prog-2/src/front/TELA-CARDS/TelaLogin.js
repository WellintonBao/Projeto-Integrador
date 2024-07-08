import React, { useState } from 'react';
import '../styles/TCStyle.css';

import HellBlue from '../media/backgrounds/HellBlue.gif';
import HellRed from '../media/backgrounds/HellRed.gif';
import icon_eye from '../media/icons/icon_eye.png';
import icon_eye_no from '../media/icons/icon_eye_no.png';


const TelaLogin = () => {
   
    /* move inputs pra variáveis */
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [eye, setEye] = useState(true);

    const negaEye = () => {
        setEye(!eye);
    }

    const handleLogar = () => {
        if (password === confirmPassword) {
            console.log('Nome:', username);
            console.log('Email:', email);
            console.log('Senha:', password);
            console.log('Cadastro realizado com sucesso!');
        } else {
            console.log('As senhas não coincidem.');
        }
    };

    return (
        <div>
            <div className="popup-container" id="popup">
                <div className="popup-content">
                    <h2 style={{marginBottom: "10%"}}>Kadastrar</h2>
                    <input className="input mouse_hover" type="text" placeholder="Apelido" value={username}
                        onChange={(e) => setUsername(e.target.value)}></input>

                    <input className="input mouse_hover" type="text" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>

                    <input
                        className="input mouse_hover"
                        type={eye ? "password" : "text"}
                        placeholder="Senha"
                        style={{width: "205px"}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        >
                    </input>
                    <button
                        className="verSenha mouse_hover"
                        onClick={negaEye}
                        >
                        <img src = {eye ? icon_eye_no : icon_eye}></img>
                    </button>

                    <input
                        className="input mouse_hover" 
                        type={eye ? "password" : "text"}
                        placeholder="Confirmar senha" 
                        style={{width: "205px"}}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        >
                    </input>
                    <button
                        className="verSenha mouse_hover"
                        onClick={negaEye}
                        >
                        <img src = {eye ? icon_eye_no : icon_eye}></img>
                    </button>
                    <div>
                        <button className="mouse_hover" onClick={handleLogar}> Konfirmar</button>
                    </div>
                </div>
            </div>

            <img className="background-img" src={HellRed}/>
        </div>
    );
};
export default TelaLogin;