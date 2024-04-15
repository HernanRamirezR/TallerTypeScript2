import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById("series");
var promedioTemporadasElm = document.getElementById("promedio-temporadas");
var detalleSerieCard = document.getElementById("detalle-serie");
renderSeriesInTable(dataSeries);
promedioTemporadasElm.innerHTML = "".concat(getPromedioTemporadas(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td style=\"color: blue; cursor: pointer;\" >").concat(serie.name, "</td>\n                           <td>").concat(serie.plataforma, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        trElement.addEventListener('click', function () { return mostrarDetalle(serie); });
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioTemporadas(series) {
    var totalSeries = series.length;
    var totalTemporadas = 0;
    var promedioTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    if (totalSeries > 0) {
        promedioTemporadas = totalTemporadas / totalSeries;
    }
    return promedioTemporadas;
}
function mostrarDetalle(serie) {
    detalleSerieCard.innerHTML = '';
    console.log('Desplegando detalles');
    var imgElement = document.createElement("img");
    imgElement.src = serie.img;
    imgElement.alt = "Image of ".concat(serie.name);
    imgElement.classList.add("card-img-top");
    detalleSerieCard.appendChild(imgElement);
    var cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    var nombre = document.createElement("h5");
    nombre.classList.add("card-title");
    nombre.textContent = serie.name;
    nombre.style.marginLeft = "10px";
    detalleSerieCard.appendChild(nombre);
    var resumen = document.createElement("p");
    resumen.textContent = serie.resumen;
    resumen.classList.add("card-text");
    resumen.style.marginLeft = "10px";
    detalleSerieCard.appendChild(resumen);
    var link = document.createElement("a");
    link.textContent = serie.enlace;
    link.href = serie.enlace;
    link.style.marginLeft = "10px";
    detalleSerieCard.appendChild(link);
}
