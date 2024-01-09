import { Map, View } from 'ol';
import { ViewOptions } from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { useMemo, useState } from 'react';
import { MapView } from './components';

function App() {
  const [defaultView, setDefaultView] = useState<ViewOptions>({
    center: [10.5, 60],
    zoom: 10,
  });
  // Map Object
  const map = useMemo(() => {
    return new Map({
      view: new View(defaultView),
    });
  }, []);

  const backgroundLayer = useMemo(() => {
    return new TileLayer({
      source: new OSM(),
    });
  }, []);
  map.addLayer(backgroundLayer);

  return (
    <>
      <MapView map={map} />
    </>
  );
}

export default App;
