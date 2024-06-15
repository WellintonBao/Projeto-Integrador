import React from 'react';

const DescricaoCursos = () => {
  return (
    <div className="col-md-9">
      <div id="descricao_cc">
        <div className="row">
          <ul className="lista_titulos_texto">
            <li>
              <h3 id="nome_curso">Nome do Curso</h3>
            </li>
          </ul>
          <ul className="lista_titulos_texto">
            <li className="titulos_texto">Turno:</li>
            <li id="turno_curso" className="descricoes_texto">Matutino</li>
          </ul>
          <ul className="lista_titulos_texto">
            <li className="titulos_texto">Titular:</li>
            <li id="coordenador_curso" className="descricoes_texto">Prof. Dr. Fulano de Tal</li>
          </ul>
          <ul className="lista_titulos_texto">
            <li className="titulos_texto">Sobre o curso:</li>
          </ul>
        </div>
        <div className="row">
          <p id="descricao_curso" className="descricoes_texto">Descrição detalhada do curso.</p>
        </div>
      </div>
    </div>
  );
};

export default DescricaoCursos;
