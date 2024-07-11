import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/GeralStyle.css';
import '../styles/LoginStyle.css';
import GeralHeader from '../GeralHeader';

import HellRed from '../media/backgrounds/HellRed.gif';
import icon_eye from '../media/icons/icon_eye.png';
import icon_eye_no from '../media/icons/icon_eye_no.png';


const TelaLogin = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();

    const [eye, setEye] = useState(true);

    const negaEye = () => {
        setEye(!eye);
    }

    const handleLogar = async() => {
        // const response = await axios.post("http://localhost3010/login",{email, password});

         if (password != "") {
             console.log('Logado com sucesso!');
             Navigate("/Biblioteca")
         } else {
             console.log('As senhas não coincidem.');
             Navigate("/Error")
         }
    };

    return (
        <div>
            <img className="background-img" src={HellRed}/>
            <div className='container p-0 m-0 mw-100' style={{backgoundColor: "pink"}}>
                <GeralHeader/>
            </div>
            <div className="popup-background">
                    <div className="popup-content">
                        <h2 style={{marginBottom: "10%", textShadow: "2px 2px red"}}>Komeçar</h2>
                        {/* <input className="input mouse_over" type="text" placeholder="Apelido" value={username}
                            onChange={(e) => setUsername(e.target.value)}></input> */}

                        <input className="input mouse_over" type="text" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}></input>
                        <div>
                        <input
                            className="input mouse_over"
                            type={eye ? "password" : "text"}
                            placeholder="Senha"
                            style={{width: "205px"}}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            >
                        </input>
                        <button style={{
                                background: "none",
                                border: "none",
                                width: "auto",
                                boxShadow: "none",
                                float: "right"
                            }}
                            className="verSenha mouse_over"
                            onClick={negaEye}
                            >
                            <img src = {eye ? icon_eye_no : icon_eye}></img>
                        </button>
                        </div>
                        <div>
                            <button className="mouse_over" onClick={handleLogar}> Konfirmar</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};
export default TelaLogin;