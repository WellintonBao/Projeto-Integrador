import React from 'react';
import BarraPesquisa from './GeralBarraNav';
import ListaCursos from './ListaCursos';
import Icones from './Icones';

function Header() {
  
  return (
    <header>
      {/* Bootstrap */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <div className="container min-hw-100 mb-2 position-relative">
        <div className="row">
          
          <div className="col-lg-7 col-sm-6 d-none d-sm-block">
            <a href="https://www.uffs.edu.br" alt="Site da Universidade Federal da Fronteira Sul">
              <img src="https://www.uffs.edu.br/++resource++importIMG/logoUFFS.png" alt="UFFS Logo" />
            </a>
          </div>

          <BarraPesquisa/>
          
          <Icones/>

        </div>
      </div>
      <ListaCursos/>
    </header>
  );
}
export default Header;



/* 
import React from 'react';
import Icones from './Icones';

function TCHeader() {
  
  return (
    <header>
       Bootstrap, n da pra deixar no app?*
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <div className="container min-hw mb-2 position-relative">
        <div className="row">
          <div className="col-lg-7 col-sm-6 d-none d-sm-block">
            <h1>Dungeon Lore</h1>
          </div>
        </div>
      </div>
      {/* <ListaCursos/>
    </header>
  );
}
export default TCHeader; */