import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import HellBlue from '../media/backgrounds/HellBlue.gif';
import GeralHeader from '../GeralHeader';
import GeralBarraNav from '../GeralBarraNav';
import '../styles/EditarCard.css';

function EditarCard() {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const [card, setCard] = useState({
        forca: null,
        sabedoria: null,
        carisma: null,
        destreza: null,
        constituicao: null,
        vida: null
    });

    useEffect(() => {
        const fetchCardDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3033/detalhes`, {
                    headers: {
                        id: id
                    }
                });
                setCard(response.data[0]); // Assume que o response é um array com um único objeto
                console.log(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do card:', error);
            }
        };

        fetchCardDetails();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCard(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3033/card/atualiza`, {
                forca: card.forca,
                sabedoria: card.sabedoria,
                carisma: card.carisma,
                destreza: card.destreza,
                constituicao: card.constituicao,
                vida: card.vida,
            }, {
                headers: {
                    id: id
                }
            });
            navigate(`/detalhes/${id}`); 
        } catch (error) {
            console.error('Erro ao editar o card:', error);
        }
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
            <div className="editar-card-container">
                <h1>Editar Card</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="forca">Força:</label>
                        <input type="number" id="forca" min='2' max='20' name="forca" value={card.forca} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sabedoria">Sabedoria:</label>
                        <input type="number" id="sabedoria" min='2' max='20' name="sabedoria" value={card.sabedoria} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carisma">Carisma:</label>
                        <input type="number" id="carisma" min='2' max='20' name="carisma" value={card.carisma} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="destreza">Destreza:</label>
                        <input type="number" id="destreza" min='2' max='20' name="destreza" value={card.destreza} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="constituicao">Constituição:</label>
                        <input type="number" id="constituicao"  min='2' max='20' name="constituicao" value={card.constituicao} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="vida">Vida:</label>
                        <input type="number" id="vida" min='2' max='20' name="vida" value={card.vida} onChange={handleChange} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                </form>
            </div>
            <img className="background-img" src={HellBlue} alt="Background" />
        </div>
    );
}

export default EditarCard;
