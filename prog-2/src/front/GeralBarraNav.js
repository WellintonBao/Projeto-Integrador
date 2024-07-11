import React from 'react';
import { Link } from 'react-router-dom';

import IconCanecas    from './media/icons/IconCanecas.jpeg';
import IconEspada     from './media/icons/IconEspada.jpeg';
import IconPergaminho from './media/icons/IconPergaminho.jpeg';

const GeralBarraNav = () => {
    return (
        <div  style={{ maxHeight: "100px", backgroundColor: "white"}}>

            <div className='container'>

                        <Link to="/registro">
                            <img className="icones" src={IconCanecas} alt="Perfil"/>
                        </Link>

                        <Link to="/cadastro">
                            <img className="icones" src={IconEspada} alt="Perfil"/>
                        </Link>
                        
            </div>
        </div>
    );
};

export default GeralBarraNav;