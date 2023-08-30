import React, { useState, useEffect } from 'react';
import Button from './components/Button'; // Importe o componente Button
import './Button.module.css'; // Importe os estilos CSS

function App() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://github.com/mariaeduardaguerra/framework-series-2023/blob/main/series-favorites.json';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.series);
      })
      .catch((error) => {
        console.error('Erro ao carregar os dados JSON:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Séries</h1>
      <Button className="my-button" text="Clique em Mim" /> {/* Use o componente Button aqui */}
      <ul>
        {series.map((serie, index) => (
          <li key={index}>
            <h2>{serie.nome}</h2>
            <p>Gêneros: {serie.generos.join(', ')}</p>
            <p>{serie.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




// import React from 'react';
// import './App.css';
// import seriesData from 'src/seriesData';
// import TerrorSeries from 'components/TerrorSeries';
// import SitcomSeries from 'components/SitcomSeries';
// import CrimeSeries from 'components/CrimeSeries';

// function App() {
//   return (
//     <div className="App">
//       <TerrorSeries series={seriesData.filter(serie => serie.generos.includes('Terror'))} />
//       <SitcomSeries series={seriesData.filter(serie => serie.generos.includes('Comédia'))} />
//       <CrimeSeries series={seriesData.filter(serie => serie.generos.includes('Crime'))} />
//     </div>
//   );
// }

// export default App;
