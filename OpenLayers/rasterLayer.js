window.onload = init;
function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 1,
      // View can also be "locked" to a specific extent
      // extent: [
      //     314100.98253342975, 7843127.604246465, 1504989.9063382475,
      //     11160492.53850512,
      // ],
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        zIndex: 1,
        visible: false,
        // https://en.wikipedia.org/wiki/Cartesian_coordinate_system
        // Define cartesian coordinates for projection left(minX), bottom(minY), right(maxX), bottom(maxY)
        extent: [
          314100.98253342975, 7843127.604246465, 1504989.9063382475,
          11160492.53850512,
        ],
        opacity: 0.5,
      }),
    ],
    target: 'js-map',
  });

  /**
   * Raster Layer group for multiple layers based on zIndex
   */
  const layerGroup = new ol.layer.Group({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
          url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        }),
        zIndex: 0,
        visible: false,
        // extent: [
        //     314100.98253342975, 7843127.604246465, 1504989.9063382475,
        //     11160492.53850512,
        // ],
      }),
      // Bing Maps basemap Layer source
      new ol.layer.Tile({
        source: new ol.source.BingMaps({
          key: 'AjjHB9IJRjQDKEEBfMPciQD9yIEizzOxL-K_xH4mB5knXmBAwTqD9TxYODfKeqhr',
          imagerySet: 'Aerial', // AerialWithLabels, Road, CanvasDark, CanvasGray
        }),
        zIndex: 1,
        visible: true,
      }),
    ],
  });
  map.addLayer(layerGroup);

  // Single Layer CartoDB
  const cartoDBBaseLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'https://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
    }),
    zIndex: 2,
    opacity: 0.5,
    visible: true,
  });
  map.addLayer(cartoDBBaseLayer);
  map.on('click', (e) => {
    console.log(e.coordinate);
  });
}
