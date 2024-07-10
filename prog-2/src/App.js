import React from 'react';

import TelaLogin      from './front/TELA-CARDS/TelaLogin';
import TelaTeste      from './front/TELA-CARDS/TelaBiblioteca';
import TelaNotFound   from './front/TELA-CARDS/TelaNotFound';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
    
    return (
        <div>

        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path='/Error' Component={ TelaNotFound}/>
                <Route path='/Login' Component={ TelaLogin}/>
                <Route path='/Biblioteca' Component={ TelaTeste}/>
            </Routes>
        </Router>

            
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"/>

            {/* <GeralHeader/>
            {/* <GeralBarraNav/>
            <GeralMain/>
                <main>

                    <TelaLogin/>
                </main> */}
                
        </div>
    );
}
export default App;