createMap= async () => {
    geoJsonUrl = "https://raw.githubusercontent.com/RandomFractals/ChicagoCrimes/master/data/chicago-community-areas.geojson"
    geoData = await d3.json(geoJsonUrl)
    trips = await d3.csv('Taxi_Trips_Preprocessed.csv')

    var map = L.map('map').setView([41.83, -87.65], 11);
    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    function onEachFeature(trips, layer){
        console.log(trips);

    }

    function style(trips){

        var colorScale = d3.scaleQuantize()
        .domain([0,1000])
        .range(colorbrewer.YlOrRd[9]);
        return{
            fillColor:colorScale(trips['Trip ID']),
            opacity: 1,
            fillOpacity: 0.7
        }
    }
    L.geoJson(geoData).addTo(map);
    L.geoJson(trips,{style:style, onEachFeature: onEachFeature}).addTo(map);
}

function init() {
    let geoJsonUrl = "https://raw.githubusercontent.com/RandomFractals/ChicagoCrimes/master/data/chicago-community-areas.geojson"
let geoData = d3.json(geoJsonUrl)
    createMap();
}

window.onload = init;