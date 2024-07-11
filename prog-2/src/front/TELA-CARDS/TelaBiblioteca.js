import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/GeralStyle.css';
import '../styles/BibliotecaStyle.css';
import HellBlue from '../media/backgrounds/HellBlue.gif';
import GeralHeader from '../GeralHeader';
import GeralBarraNav from '../GeralBarraNav';
import img from '../img/paradin.jpeg'

function TelaBiblioteca() {
    const [cards, setCards] = useState([]);
    const userEmail = localStorage.getItem('email'); // Recupera o email do localStorage
    const navigate = useNavigate(); 

    useEffect(() => {

        axios.interceptors.request.use(function (config) {
            if (userEmail) {
                config.headers['email'] = userEmail;
            }
            return config;
        });

        axios.get('http://localhost:3033/card/projeta')
            .then(response => {
                setCards(response.data); 
            })
            .catch(error => console.error('Erro ao buscar cards:', error));
    }, [userEmail]);


    const handleClickCard = (id) => {
        console.log(id)
        navigate(`/detalhes/${id}`);
    };

    return (
        <div>
            <div className='container p-0 m-0 mw-100'>
                <GeralHeader />
                <GeralBarraNav />
            </div>
            <div className='container sm-12 mt-4 col-10 p-3 vh-100 popup'>
                {cards.map(card => (
                    <div key={card.idcard} className="col-6 col-md-6 col-lg-6 card" onClick={() => handleClickCard(card.idcard)}>
                        <div className='card_header h3'>
                            {card.nome}
                        </div>
                        <div className='card_body'>
                            <img src= {img} alt={card.titulo} className='card_image' />
                        </div>
                        <div className='card_footer'>
                            <label>
                                Tipo: {card.tipo}
                            </label>
                            <label>
                                Criador: {card.criador}
                            </label>
                        </div>
                    </div>

                ))}
            </div>
            <img className="background-img" src={HellBlue} alt="Background" />
        </div>
    );
}

export default TelaBiblioteca;
