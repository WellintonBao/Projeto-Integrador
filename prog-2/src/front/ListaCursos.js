import React, { useState } from 'react';

const cursoIPs = {
  'curso_cc' : '1101',
  'curso_geo': '1100',
  'curso_agr': '2200',
  'curso_adm': '2400'
};

const ListaCursos = () => {

  const [cursos, setCurso] = useState(null);

  const alteraCurso = (curso) => {
    console.log(curso.id, curso.id, curso.descricao);
    setCurso(curso);
  };

  const onClick = async (id) => {
    console.log(id);
    const cursoIp = cursoIPs[id];
    if (cursoIp) {
      try {
        const response = await fetch(`http://localhost:3001/curso/${cursoIp}`);
        const curso = await response.json();
        alteraCurso(curso);
      } catch (error) {
        console.error('Erro ao buscar o curso:', error);
      }
    } else {
      console.error('ID do curso não encontrado!');
    }
  };
  
  return (
    <div className="container text-center min-hw-100">
      <nav>
        <ul className="row" id="lista_cursos">
          <li className="col-md-3">
            {/* <a className="button-cursos" id="curso_cc">Ciência da Computação</a> */}
            <button  className="button-cursos" onClick={() => onClick("curso_cc")}>
              Ciência da Computação
            </button>
          </li>
          <li className="col-md-3">
            {/* <a className="button-cursos" id="curso_agro">Agronomia</a> */}
            <button  className="button-cursos" onClick={() => onClick("curso_agr")}>
              Agronomia
            </button>
          </li>
          <li className="col-md-3">
            {/* <a className="button-cursos" id="curso_geo">Geografia</a> */}
            
            <button  className="button-cursos" onClick={() => onClick("curso_geo")}>
              Grografia
            </button>
          </li>
          <li className="col-md-3">
            {/* <a className="button-cursos" id="curso_adm">Administração</a> */}
            
            <button  className="button-cursos" onClick={() => onClick("curso_adm")}>
              Administração
            </button>
          </li>
        </ul> 
      </nav>
    </div>
  );
};

export default ListaCursos;