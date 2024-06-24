import React, { useState } from 'react';
import '../styles/TCStyle.css';

import HellBlue from '../media/backgrounds/HellBlue.gif';
import HellRed from '../media/backgrounds/HellRed.gif';
import Josette from '../media/backgrounds/Josette.gif';
import PopUpDiablo from '../media/buttons/PopUpDiablo.png';


const TelaLogin = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.josette-cursor');
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        });

    const handleSubmit = () => {
        if (password === confirmPassword) {
            // As senhas coincidem
            console.log('Nome:', username);
            console.log('Email:', email);
            console.log('Senha:', password);

            // Mova os valores para variáveis ou faça outra lógica
            setMessage('Cadastro realizado com sucesso!');
        } else {
            // As senhas não coincidem
            setMessage('As senhas não coincidem.');
        }
    };

    return (
        <div>
            <div className="popup-container" id="popup">
                <div className="popup-content">
                    <h2 style={{marginBottom: "10%"}}>Kadastrar</h2>
                    <input className="input" type="text" placeholder="Apelido" value={username}
                        onChange={(e) => setUsername(e.target.value)}></input>

                    <input className="input" type="text" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>

                    <input className="input" type="text" placeholder="Senha" value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>

                    <input className="input" type="text" placeholder="Confirmar senha" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    <div>
                        <button onClick={handleSubmit}> Konfirmar</button>
                        {/* <button onClick={() => document.getElementById('popup').style.display = 'none'}/> */}
                    </div>
                </div>
            </div>

            <img className="background-img" src={HellRed}/>
        </div>
    );
};
export default TelaLogin;