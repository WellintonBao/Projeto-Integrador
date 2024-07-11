import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import HellBlue from '../media/backgrounds/HellBlue.gif';
import GeralHeader from '../GeralHeader';
import GeralBarraNav from '../GeralBarraNav';

import '../styles/CadastrarCard.css';

const CadastroCard = () => {
    const navigate = useNavigate();

    const [card, setCard] = useState({
        nome: '',
        forca: '',
        sabedoria: '',
        inteligencia: '',
        carisma: '',
        destreza: '',
        constituicao: '',
        vida: '',
        tamanho: '',
        tendencia: '',
        classearm: '',
        nvlde: '',
        caracteristica: '',
        ataque: '',
        caminhoimg: '',
        familia: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCard(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        const userEmail = localStorage.getItem('email'); 
        e.preventDefault();
        try {
            await axios.post('http://localhost:3033/card/criar',{
                nome: card.nome,
                forca: parseInt(card.forca),
                sabedoria: parseInt(card.sabedoria),
                inteligencia: parseInt(card.inteligencia),
                carisma: parseInt(card.carisma),
                destreza: parseInt(card.destreza),
                constituicao: parseInt(card.constituicao),
                vida: parseInt(card.vida),
                tamanho: parseInt(card.tamanho),
                tendencia: parseInt(card.tendencia),
                classearm: parseInt(card.classearm),
                nvlde: parseInt(card.nvlde),
                caracteristica: card.caracteristica,
                ataque: card.ataque,
                caminhoimg: card.caminhoimg,
                familia: parseInt(card.familia),
                criador: userEmail
            });
            navigate('/Biblioteca'); // Redireciona para a tela de biblioteca após o cadastro
        } catch (error) {
            console.error('Erro ao cadastrar o card:', error);
        }
    };

    return (
        <div>
            <div className='container p-0 m-0 mw-100'>
                <GeralHeader />
                <GeralBarraNav />
            </div>
            <div className='container sm-12 mt-4 col-10 detalhes-popup'>
                <h1 id='cad'>Cadastro de Card</h1>
                <form onSubmit={handleSubmit} className="cadastro-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" value={card.nome} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="forca">Força:</label>
                        <input type="number" id="forca" name="forca" value={card.forca} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sabedoria">Sabedoria:</label>
                        <input type="number" id="sabedoria" name="sabedoria" value={card.sabedoria} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inteligencia">Inteligência:</label>
                        <input type="number" id="inteligencia" name="inteligencia" value={card.inteligencia} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carisma">Carisma:</label>
                        <input type="number" id="carisma" name="carisma" value={card.carisma} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="destreza">Destreza:</label>
                        <input type="number" id="destreza" name="destreza" value={card.destreza} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="constituicao">Constituição:</label>
                        <input type="number" id="constituicao" name="constituicao" value={card.constituicao} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="vida">Vida:</label>
                        <input type="number" id="vida" name="vida" value={card.vida} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="classearm">Classe de Armadura:</label>
                        <input type="number" id="classearm" name="classearm" value={card.classearm} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nvlde">Nível de Desafio:</label>
                        <input type="number" id="nvlde" name="nvlde" value={card.nvlde} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="caracteristica">Característica:</label>
                        <input type="text" id="caracteristica" name="caracteristica" value={card.caracteristica} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ataque">Ataque:</label>
                        <input type="text" id="ataque" name="ataque" value={card.ataque} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="caminhoimg">Caminho da Imagem:</label>
                        <input type="text" id="caminhoimg" name="caminhoimg" value={card.caminhoimg} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tamanho">Tamanho:</label>
                        <select id="tamanho" name="tamanho" value={card.tamanho} onChange={handleChange} className="form-control">
                            <option value="">Selecione o tamanho</option>
                            <option value="1">Pequeno</option>
                            <option value="2">Médio</option>
                            <option value="3">Grande</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tendencia">Tendência:</label>
                        <select id="tendencia" name="tendencia" value={card.tendencia} onChange={handleChange} className="form-control">
                            <option value="">Selecione a tendência</option>
                            <option value="1">Bom</option>
                            <option value="2">Malvado</option>
                            <option value="3">Rebelde</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="familia">Família:</label>
                        <select id="familia" name="familia" value={card.familia} onChange={handleChange} className="form-control">
                            <option value="">Selecione a família</option>
                            <option value="1">Anão</option>
                            <option value="2">Elfo</option>
                            <option value="3">Humano</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
            <img className="background-img" src={HellBlue} alt="Background" />
        </div>
    );
};

export default CadastroCard;
