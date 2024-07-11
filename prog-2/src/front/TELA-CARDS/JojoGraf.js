import React from 'react';

import { Chart, registerables } from 'chart.js';
import { Radar } from 'react-chartjs-2';


Chart.register(...registerables);

  const JojoGraf = ({card}) => {
    if (!card) return null;
    
    const data = {
      labels: ['FOR', 'INT', 'CAR', 'DEX', 'SAB', 'CON'],
      datasets:[
        {
          data: [card.forca, card.inteligencia, card.carisma, card.destreza, card.sabedoria, card.constituicao],
          fill: true,
          backgroundColor: 'rgba(256, 0, 0, 0.5)',
          pointBorderColor: 'blue',
          pointHoverBackgroundColor: 'blue'
        }
      ]
    };

     const options = {
      scales: {
        r: {
          angleLines: {
            color: 'white'
          },

          grid: {
            color: 'white'
          },

          pointLabels: {
            color: 'white',
            font: {
              weight: 'bold',
              size: 14
            }
          },

        ticks: {
          backdropColor: 'rgba(0, 0, 0, 0)',
          color: 'white',
          font: {
            weight: 'bold',
            size: 14
          }
        },

          suggestedMin: 1,
          suggestedMax: 20
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    };


    return (
        <Radar data={data} options={options}/>
    );
  }

export default JojoGraf;