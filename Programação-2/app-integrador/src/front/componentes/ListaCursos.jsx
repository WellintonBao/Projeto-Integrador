import React from 'react';

const ListaCursos = () => {
  return (
    <div className="container text-center min-hw-100">
      <nav>
        <ul className="row" id="lista_cursos">
          <li className="col-md-3">
            <a className="button-cursos" id="curso_cc">Ciência da Computação</a>
          </li>
          <li className="col-md-3">
            <a className="button-cursos" id="curso_agro">Agronomia</a>
          </li>
          <li className="col-md-3">
            <a className="button-cursos" id="curso_geo">Geografia</a>
          </li>
          <li className="col-md-3">
            <a className="button-cursos" id="curso_adm">Administração</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListaCursos;