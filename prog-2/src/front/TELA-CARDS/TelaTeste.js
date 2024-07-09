import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TelaTeste() {

    const Navigate = useNavigate();
    
    const handleVoltar=() => {
        Navigate("/Login");
    }

    return (
        <div style={{text: "center"}}>
            <h1>kkkkkkkkko</h1>
            <button className="mouse_over" onClick={handleVoltar}
            >voltar login</button>
        </div>
    );
  }
  export default TelaTeste;