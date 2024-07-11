import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/GeralStyle.css';
import '../styles/BibliotecaStyle.css';

import HellBlue from '../media/backgrounds/HellBlue.gif';

import GeralHeader from '../GeralHeader';
import GeralBarraNav from '../GeralBarraNav';
import JojoGraf from './JojoGraf';

function TelaBiblioteca() {
    const Navigate = useNavigate();
    
    //Teste grafico
    const card = {
        forca: 10,
        inteligencia: 15,
        carisma: 8,
        destreza: 12,
        sabedoria: 14,
        constituicao: 11
      };

    return (
        <div >
            <div className='container p-0 m-0 mw-100' >
                <GeralHeader/>
                <GeralBarraNav/>
            </div>
            <div className='container sm-12 mt-4 col-10 popup '>
                    filtros kkkk
            </div>
            <div className='container sm-12 mt-4 col-10 p-3 vh-100 popup'>

                <div id="div1" className="col-xs-2 col-md-6 col-lg-3 card">
                    <div className='card_header h3' >
                        Card Name
                    </div>
                    <div className='card_body' >
                        <div className='card_graph'>
                            <JojoGraf card={card}/>
                        </div>
                    </div>
                    <div className='card_footer' >
                        Description
                    </div>
                </div> 


                <div id="div2" className="col-xs-2 col-md-6 col-lg-3 card">
                    <div className='card_header h3' >
                        Card Name
                    </div>
                    <div className='card_body' >
                        <div className='card_graph'>statistics</div>
                    </div>
                    <div className='card_footer' >
                        Description
                    </div>
                </div>


                <div id="div3" className="col-xs-2 col-md-6 col-lg-3 card">
                    <div className='card_header h3' >
                        Card Name
                    </div>
                    <div className='card_body' >
                        <div className='card_graph'>statistics</div>
                    </div>
                    <div className='card_footer'>
                        <label>
                            Description Description Description Description Description Description
                            Description Description Description Description Description Description
                            Description Description Description Description Description Description
                        </label>
                    </div>
                </div>

            </div>
            <img className="background-img" src={HellBlue}/>
        </div>
    );
  }
  export default TelaBiblioteca;