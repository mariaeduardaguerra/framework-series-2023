import React from 'react';
import Serie from './Serie'; // Importe o componente 'Serie'

function TerrorSeries({ series }) {
  return (
    <div className="serie-list">
      <h1>Séries de Terror</h1>
      {series.map((serie, index) => (
        <Serie key={index} {...serie} />
      ))}
    </div>
  );
}

export default TerrorSeries;
