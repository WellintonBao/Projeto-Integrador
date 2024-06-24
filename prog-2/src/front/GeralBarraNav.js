import React from 'react';
import IconCanecas from './media//icons/IconCanecas.jpeg';
import IconEspada from './media//icons/IconEspada.jpeg';
import IconPergaminho from './media//icons/IconPergaminho.jpeg';



const GeralBarraNav = () => {
    return (
        <div className="min-w-100" 
            style={{backgroundColor: " white" }}>
            <div className="container">
                <nav> <ul className="p-0 m-0">
                    <li className="d-inline">
                        <a href="https//www.youtube.com"> {/* ALTERAR O LINK PARA A MAIN */}
                            <img className="icones" src={IconCanecas} alt="Perfil"/>
                        </a>
                    </li>
                    <li className="d-inline">
                        <a href="https//www.youtube.com"> {/* ALTERAR O LINK PARA A MAIN */}
                            <img className="icones" src={IconEspada} alt="Perfil"/>
                        </a>
                    </li>
                    <li className="d-inline">
                        <a href="https//www.youtube.com"> {/* ALTERAR O LINK PARA A MAIN */}
                            <img className="icones" src={IconPergaminho} alt="Perfil"/>
                        </a>
                    </li>
                </ul> </nav>
            </div>
        </div>
    );
};

export default GeralBarraNav;