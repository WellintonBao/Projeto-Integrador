import React from 'react';
import BotaoDark from './BotaoDark';

const Icones = () => {
    return (
        <div className="col-lg-2 col-sm-12" style={{ textAlign: 'right' }}>

            <a href="https://twitter.com/uffsonline" style={{ textDecoration: 'none' }}>
                <img 
                    className="bitmap" 
                    alt="Ícone do X (twitter)" 
                    src="https://www.uffs.edu.br/++resource++importIMG/icon/100px/whiteTwitter.png"
                />
            </a>

            <a href="https://instagram.com/escolhiseruffs" style={{ textDecoration: 'none' }}>
                <img 
                    className="bitmap" 
                    alt="Icone do Instagram" 
                    src="https://www.uffs.edu.br/++resource++importIMG/icon/100px/whiteInstagram.png"
                />
            </a>
            <BotaoDark/>
        </div>
    );
};

export default Icones;