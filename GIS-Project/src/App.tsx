import { Map, View } from 'ol';
import { ViewOptions } from 'ol/View';
import { useGeographic } from 'ol/proj';
import { useEffect, useMemo, useState } from 'react';
import { MapView } from './components';
import { useBackgroundLayer, useCountiesLayer } from './hooks';

function App() {
  // Geographic projection for longitude and latitude
  useGeographic();
  const backgroundLayer = useBackgroundLayer();
  const countiesLayer = useCountiesLayer();
  const [defaultView, setDefaultView] = useState<ViewOptions>({
    center: [10.740584026007738, 59.91564290165622],
    zoom: 12,
  });

  // Map Object
  const map = useMemo(() => {
    return new Map({
      view: new View(defaultView),
    });
  }, []);

  // All layers
  const layerStack = useMemo(() => {
    return [backgroundLayer, ...[countiesLayer]];
  }, []);

  useEffect(() => {
    map.setLayers(layerStack);
  }, [layerStack]);

  return (
    <>
      <MapView className="w-screen h-screen" map={map} />
    </>
  );
}

export default App;
