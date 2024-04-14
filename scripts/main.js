import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById("series");
var promedioTemporadasElm = document.getElementById("promedio-temporadas");
renderSeriesInTable(dataSeries);
promedioTemporadasElm.innerHTML = "".concat(getPromedioTemporadas(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><a href=\"").concat(serie.enlace, "\">").concat(serie.name, "</td>\n                           <td>").concat(serie.plataforma, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
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
