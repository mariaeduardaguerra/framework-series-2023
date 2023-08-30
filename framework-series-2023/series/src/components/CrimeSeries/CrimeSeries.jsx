import React from 'react';
import Serie from './Serie'; // Importe o componente 'Serie'

function CrimeSeries({ series }) {
  return (
    <div className="serie-list">
      <h1>Séries de Crime/Policial</h1>
      {series.map((serie, index) => (
        <Serie key={index} {...serie} />
      ))}
    </div>
  );
}

export default CrimeSeries;
