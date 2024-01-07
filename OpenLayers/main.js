window.onload = init;

/**
 * @description Initializes a map object
 * - To create a map object we need to define a view object with center and coordinates and zoom level
 * - Map works with layers and we start with a base tile that is `Open Street Map`
 * - target to render the map
 */
function init() {
    const map = new ol.Map({
        view: new ol.View({
            center: [0, 0],
            zoom: 2,
            maxZoom: 10,
            minZoom: 2,
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
            }),
        ],
        target: "js-map",
    });
}
