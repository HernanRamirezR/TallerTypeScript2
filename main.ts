import { Serie } from './serie.js';
import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById("series")!;
const promedioTemporadasElm: HTMLElement = document.getElementById("promedio-temporadas")!;

let detalleSerieCard: HTMLElement = document.getElementById("detalle-serie")!;

renderSeriesInTable(dataSeries)

promedioTemporadasElm.innerHTML = `${getPromedioTemporadas(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach(serie => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td style="color: blue; cursor: pointer;" >${serie.name}</td>
                           <td>${serie.plataforma}</td>
                           <td>${serie.temporadas}</td>`;
    trElement.addEventListener('click', ()=>mostrarDetalle(serie))
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


  function mostrarDetalle(serie: Serie): void {

    detalleSerieCard.innerHTML = '';

    console.log('Desplegando detalles');
    let imgElement = document.createElement("img");
    imgElement.src = serie.img;
    imgElement.alt = `Image of ${serie.name}`;
    imgElement.classList.add("card-img-top"); 
    detalleSerieCard.appendChild(imgElement); 

    let cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
  
    let nombre = document.createElement("h5");
    nombre.classList.add("card-title");
    nombre.textContent = serie.name;
    nombre.style.marginLeft = "10px";
    detalleSerieCard.appendChild(nombre);

    let resumen = document.createElement("p");
    resumen.textContent = serie.resumen;
    resumen.classList.add("card-text");
    resumen.style.marginLeft = "10px";
    detalleSerieCard.appendChild(resumen);

    let link = document.createElement("a");
    link.textContent = serie.enlace;
    link.href=serie.enlace;
    link.style.marginLeft = "10px";
    detalleSerieCard.appendChild(link);


}



