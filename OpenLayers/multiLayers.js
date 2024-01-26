window.onload = init;
function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 1,
    }),
    target: 'js-map',
  });
  // Base Layers for radio buttons
  const OSM = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title: 'OSMStandard',
  });
  const BingMap = new ol.layer.Tile({
    source: new ol.source.BingMaps({
      key: 'AjjHB9IJRjQDKEEBfMPciQD9yIEizzOxL-K_xH4mB5knXmBAwTqD9TxYODfKeqhr',
      imagerySet: 'Aerial', // AerialWithLabels, Road, CanvasDark, CanvasGray
    }),
    visible: false,
    title: 'BingMaps',
  });

  const baseLayerGroup = new ol.layer.Group({
    layers: [OSM, BingMap],
  });

  map.addLayer(baseLayerGroup);
  baseLayerSwitcher(baseLayerGroup);
}

/**
 * Select all radio buttons and loop through the array of radio buttons.
 * - For each buttons, attach event listeners to the change event.
 * - Then get all base layers that is a collection.
 * - For each layer in the collection, provide a callback function with 3 params. https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html
 * - Get 'title' from the element.
 * @param {*} baseLayers
 */
function baseLayerSwitcher(baseLayers) {
  const baseLayerEles = document.querySelectorAll(
    '.sidebar > input[type=radio]'
  );
  for (let ele of baseLayerEles) {
    ele.addEventListener('change', function () {
      // console.log(this.value)
      let baseLayerElementValue = this.value;
      const layers = baseLayers.getLayers();
      layers.forEach(function (element, index, array) {
        // console.log(element.get('title'))
        let baseLayerName = element.get('title');
        // If the one we clicked matches the base layer show the layer
        element.setVisible(baseLayerName === baseLayerElementValue);
      });
    });
  }
  console.log(baseLayerEles);
}
