import React from 'react';

const BarraPesquisa = () => {
  return (
    <div className="col-lg-3 col-sm-6 end-0" style={{ textAlign: 'right' }}>
      <input className="pesquisa" type="text" name="pesquisa" placeholder="Buscar Curso" />
    </div>
  );
};

export default BarraPesquisa;