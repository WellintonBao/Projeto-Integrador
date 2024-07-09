import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TelaNotFound() {

    const Navigate = useNavigate();
    
    const handleVoltar=() => {
        Navigate("/Login");
    }

    return (
        <div className="container mh-100" style={{text: "center", backgroundColor: "gray"}}>
            <h1>404 bobão</h1>
            <button className="mouse_over" onClick={handleVoltar}
            >voltar login</button>
        </div>
    );
  }
  export default TelaNotFound;