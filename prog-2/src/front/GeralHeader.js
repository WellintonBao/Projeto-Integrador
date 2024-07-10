import React from 'react';
import './styles/GeralStyle.css';

import { useNavigate, Link } from 'react-router-dom';

import IconMago from './media/icons/IconMago.jpeg';

function GeralHeader() {
    const navigate=useNavigate();
    const handleMain=() => {
        navigate("/Login")
    }

    return (
        <header>
            <div className="container">
                <div className="row pt-2 m-0">
                     <div className="col-3" >
                        <a style={{ textDecoration: "none", color: "red", content: "center"}}
                           onClick={handleMain} >

                            <h1 className='mouse_over'>Dungeon Lore</h1>
                        </a>
                    </div>
                    <div  className="col-8 p-0 mr-100" />
                     <div className="col-1 p-0" >
                        <Link to='/Sucesso'>
                            <img src={IconMago}  className="icones icon-perfil" alt="Perfil" 
                                 style={{border: "2px solid yellow"}}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{height: "5px", backgroundColor: 'red'}}/>
        </header>
    );
}
export default GeralHeader;