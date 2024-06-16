import React from 'react';
/* import BotaoDark from './BotaoDark'; */

const Icones = () => {
    return (
        <div className="col-lg-2 col-sm-12" style={{ textAlign: 'right' }}>
            <a>
                <img 
                    className="bitmap" 
                    alt="Seu perfil" 
                    src="https://cdn-icons-png.flaticon.com/512/1183/1183773.png"
                />
            </a>
            {/* <BotaoDark/> */}
        </div>
    );
};

export default Icones;