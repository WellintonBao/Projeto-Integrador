import React from 'react';

const ListaSemestres = () => {
  return (
    <div className="col-md-3">
      <nav>
        <ul className="list-group">
          <li className="lista_semestres list-group-item-action">
            <h2> <a>Primeiro semestre</a> </h2>
          </li>
          <li className="lista_semestres list-group-item-action">
            <h2> <a>Segundo semestre</a> </h2>
          </li>
          <li className="lista_semestres list-group-item-action">
            <h2> <a>Terceiro semestre</a> </h2>
          </li>
          <li className="lista_semestres list-group-item-action">
            <h2> <a>Quarto semestre</a> </h2>
          </li>
          <li className="lista_semestres list-group-item-action">
            <h2> <a>Quinto semestre</a> </h2>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListaSemestres;