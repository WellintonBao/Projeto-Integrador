import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/GeralStyle.css';
import '../styles/DetalhesStyle.css';
import HellBlue from '../media/backgrounds/HellBlue.gif';
import GeralHeader from '../GeralHeader';
import GeralBarraNav from '../GeralBarraNav';
import JojoGraf from './JojoGraf';
import img from '../img/paradin.jpeg';


function DetalhesCard() {
    const { id } = useParams(); 
    const navigate = useNavigate(); 

    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchCardDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3033/detalhes`, {
                    headers: {
                        id: id
                    }
                });
                setCard(response.data[0]);
                console.log(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do card:', error);
            }
        };

        fetchCardDetails();
    }, [id]);

    const handleDelete = async () => {
        try {
            console.log('try')
            await axios.delete(`http://localhost:3033/card/deletar`,{
                headers: {
                    id: id
                }
            });
            navigate('/Biblioteca'); 
        } catch (error) {
            console.error('Erro ao deletar o card:', error);
        }
    };

    const handleEdit = () => {
        navigate(`/editar/${id}`);
    };

    if (!card) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <div className='container p-0 m-0 mw-100'>
                <GeralHeader />
                <GeralBarraNav />
            </div>
            <div className='container sm-12 mt-4 col-10 detalhes-popup'>
                <h1 id = 'tit'>Detalhes do Card</h1>
                <div className='detalhes-content'>
                    <div className='detalhes-card'>
                        <div className='detalhes-card-header h3'>
                            {card.nome}
                        </div>
                        <div className='detalhes-card-body'>
                            <img src={img} alt={card.nome} className="detalhes-card-image"/>
                            <div>
                                <strong>Força:</strong> {card.forca}
                            </div>
                            <div>
                                <strong>Sabedoria:</strong> {card.sabedoria}
                            </div>
                            <div>
                                <strong>Carisma:</strong> {card.carisma}
                            </div>
                            <div>
                                <strong>Destreza:</strong> {card.destreza}
                            </div>
                            <div>
                                <strong>Constituição:</strong> {card.constituicao}
                            </div>
                            <div>
                                <strong>Vida:</strong> {card.vida}
                            </div>
                            <div>
                                <strong>Inteligência:</strong> {card.inteligencia}
                            </div>
                            <div>
                                <strong>Classe de Armadura:</strong> {card.classearm}
                            </div>
                            <div>
                                <strong>Nível de Dificuldade:</strong> {card.nvlde}
                            </div>
                            <div>
                                <strong>Característica:</strong> {card.caracteristica}
                            </div>
                            <div>
                                <strong>Ataque:</strong> {card.ataque}
                            </div>
                        </div>
                        <div className='detalhes-card-footer'>
                            <label>
                                Tamanho: {card.tamanho}
                            </label>
                            <label>
                                Familia: {card.familia}
                            </label>
                            <label>
                                Tendencia: {card.tendencia}
                            </label>
                            <label>
                                Criador: {card.criador}
                            </label>
                        </div>
                    </div>
                    <div className='detalhes-card-graph'>
                        <JojoGraf card={card}/>
                    </div>
                </div>
                <div className="detalhes-buttons">
                    <button onClick={handleEdit} className="btn btn-primary mr-2">Editar</button>
                    <button onClick={handleDelete} className="btn btn-danger">Deletar</button>
                </div>
            </div>
            <img className="background-img" src={HellBlue} alt="Background" />
        </div>
    );
}

export default DetalhesCard;
