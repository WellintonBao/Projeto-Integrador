export const separaCurso = (curso) => {
    return {
      name: curso.name(),
      coordenador: curso.coordenador(),
      descricao: curso.descricao(),
      turno: curso.turno,
    };
  };