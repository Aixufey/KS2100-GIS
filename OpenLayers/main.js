window.onload = init;
// Grab the element
const popupContainerEle = queryDOM("popup-container");

/**
 * https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html
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
        }),
        // Tile is base layer, we can add vector and raster on top
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
            }),
        ],
        target: "js-map",
        keyboardEventTarget: document,
    });

    // Create an overlay
    const popup = createOverlay(popupContainerEle);
    // Adding overlay to map
    map.addOverlay(popup);
    map.on("click", (e) => {
        const coord = e.coordinate;
        popup.setPosition(undefined);
        popup.setPosition(coord);
        popupContainerEle.innerHTML = coord;
    });

    // Drag and Rotate
    const dragRot = new ol.interaction.DragRotate({
        condition: ol.events.condition.altKeyOnly,
    });
    map.addInteraction(dragRot);

    // Drawing
    const draw = new ol.interaction.Draw({
        type: "Polygon",
        // freehand: true,
    });
    map.addInteraction(draw);

    draw.on("drawend", (e) => {
        let parser = new ol.format.GeoJSON();
        let drawnFeatures = parser.writeFeaturesObject([e.feature]);
        console.log(drawnFeatures.features[0].geometry.coordinates);
    });
}

/**
 *
 * @param {*} id of the element
 * @returns element from DOm
 */
function queryDOM(id) {
    if (!id || id.length === 0) {
        throw new Error("id is not defined");
    }
    return document.querySelector(`#${id}`);
}

/**
 * @description https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html
 * @param {*} container element to be added as overlay
 * @returns overlay object with mirrored positioning
 */
function createOverlay(container) {
    if (!container || container.length === 0) {
        throw new Error("Container is not defined");
    }
    return new ol.Overlay({
        element: container,
        positioning: "bottom-left",
    });
}
