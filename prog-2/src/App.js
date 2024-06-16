import React from 'react';
import './front/styles/Style.css';

import GeralHeader    from './front/GeralHeader';
import GeralBarraNav  from './front/GeralBarraNav';
import GeralMain           from './front/GeralMain';


const App = () => {
    return (

        <div className="container-fluid w-100 mw-100 p-0">            
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
            />
            <GeralHeader/>
            <GeralBarraNav/>
            <GeralMain/>
        </div>
    );
}
export default App;