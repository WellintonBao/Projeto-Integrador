import React from 'react';
import ListaSemestres from './ListaSemestres';
import DescricaoCursos from './DescricaoCursos';

const Main = () => {
  return (
    <main>
      <div className="container min-hw-100">
        <div className="row w-100 mx-6 pt-3">
          <ListaSemestres />
          <DescricaoCursos />
        </div>
      </div>
    </main>
  );
};

export default Main;