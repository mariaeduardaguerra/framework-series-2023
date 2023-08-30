import React from 'react';

function Serie({ nome, generos, descricao }) {
  return (
    <div className="serie">
      <h2>{nome}</h2>
      <p>Gêneros: {generos.join(', ')}</p>
      <p>{descricao}</p>
    </div>
  );
}

export default Serie;
