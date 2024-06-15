import Header from './front/componentes/Header';
import Main from './front/componentes/Main';
import './front/styles/Style.css';
import React, { useState } from 'react';


const App = () => {
  return (
    <div className="container-fluid w-100 mw-100 p-0">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;