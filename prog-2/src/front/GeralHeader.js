import React from 'react';
import './styles/TCStyle.css';
import IconMago from './media/icons/IconMago.jpeg';

function GeralHeader() {
  
    return (
        <header>
            <div className="container">
                <div className="row pt-2 m-0">
                    <div className="col-11 p-0">
                        <a>
                            <h1>Dungeon Lore</h1>
                        </a>
                    </div>

                    <div className="col-1 p-0">
                        <a to='/Sucesso'>
                            <img src={IconMago} className="icones" alt="Perfil" 
                                 style={{border: "2px solid yellow"}}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div style={{height: "5px", backgroundColor: 'red'}}/>
        </header>
    );
}
export default GeralHeader;