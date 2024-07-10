import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/GeralStyle.css';

import GeralHeader from '../GeralHeader';
import GeralBarraNav from '../GeralBarraNav';

function TelaBiblioteca() {

    const Navigate = useNavigate();
    
    const handleVoltar=() => {
        Navigate("/Login");
    }

    return (
        <div>
            <GeralHeader/>
            <GeralBarraNav/>
            <h1>kkkkkkkkko</h1>
            <button className="mouse_over" onClick={handleVoltar}
            >voltar login</button>
        </div>
    );
  }
  export default TelaBiblioteca;