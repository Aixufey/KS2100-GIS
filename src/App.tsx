import { Map, View } from 'ol';
import { ViewOptions } from 'ol/View';
import { useGeographic } from 'ol/proj';
import { useEffect, useMemo, useState } from 'react';
import { AsideView, MapView } from './components';
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
      <div className="flex flex-row">
        <AsideView
          children={'KWS2100 GIS'}
          className="basis-1/5 w-screen h-screen flex flex-col border-2 border-black"
        />
        <MapView
          className="basis-4/5 w-screen h-screen border-2 border-black"
          map={map}
        />
      </div>
    </>
  );
}

export default App;
