import { Serie } from './serie.js';
import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById("series")!;
const promedioTemporadasElm: HTMLElement = document.getElementById("promedio-temporadas")!;

renderSeriesInTable(dataSeries)

promedioTemporadasElm.innerHTML = `${getPromedioTemporadas(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach(serie => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a href="${serie.enlace}">${serie.name}</td>
                           <td>${serie.plataforma}</td>
                           <td>${serie.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getPromedioTemporadas(series: Serie[]): number {
    const totalSeries = series.length;
    let totalTemporadas: number = 0;
    let promedioTemporadas: number = 0;

    series.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporadas);

    if (totalSeries > 0) {
        promedioTemporadas = totalTemporadas / totalSeries;
    }
    return promedioTemporadas;
  }


