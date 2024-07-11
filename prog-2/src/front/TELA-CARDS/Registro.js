import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HellBlue from '../media/backgrounds/HellBlue.gif';
import GeralHeader from '../GeralHeader';
import '../styles/GeralStyle.css'; 
import '../styles/RegistroUsuario.css'; 

const RegistroUsuario = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const navigate = useNavigate();

    const handleRegistro = async (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        if (!email || !senha || !nome || !apelido || !dataNascimento) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            await axios.post('http://localhost:3033/novoUsuario', { email, senha, nome, apelido, dataNascimento });
            console.log('Usuário registrado com sucesso!');
            navigate('/Login'); 
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
        }
    };

    return (
        <div>
            <div className='container p-0 m-0 mw-100'>
                <GeralHeader />
            </div>
            <div className="registro-container">
                <h2>Tela de Registro de Usuário</h2>
                <form onSubmit={handleRegistro} className="registro-form">
                    <div className="form-group">
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="registro-input" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="registro-input" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="registro-input" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Apelido" value={apelido} onChange={(e) => setApelido(e.target.value)} className="registro-input" />
                    </div>
                    <div className="form-group">
                        <input type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className="registro-input" />
                    </div>
                    <button type="submit" className="registro-btn">Registrar</button>
                </form>
            </div>
            <img className="background-img" src={HellBlue} alt="Background" />
        </div>
    );
};

export default RegistroUsuario;
