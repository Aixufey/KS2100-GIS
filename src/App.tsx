import { Map, View } from 'ol';
import { ViewOptions } from 'ol/View';
import { useGeographic } from 'ol/proj';
import { MouseEvent, useEffect, useMemo, useState } from 'react';
import { AsideView, ControlsView, MapView, NavigatorView } from './components';
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
  const [layersToggle, setLayersToggle] = useState({
    isCounties: false,
  });

  // Map Object
  const map = useMemo(() => {
    return new Map({
      view: new View(defaultView),
    });
  }, []);

  // All layers
  const layerStack = useMemo(() => {
    return [
      backgroundLayer,
      ...(layersToggle.isCounties ? [countiesLayer] : []),
    ];
  }, [layersToggle.isCounties]);

  useEffect(() => {
    map.setLayers(layerStack);
  }, [layerStack]);

  const handleResetClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    map.getView().animate(defaultView);
  };
  const handleShowLocationClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((pos) => {
      const { longitude, latitude } = pos.coords;
      const center = [longitude, latitude];
      map.getView().animate({ center, zoom: 18 });
    });
  };
  const handleCountiesClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLayersToggle((prev) => ({
      ...prev,
      isCounties: !prev.isCounties,
    }));
  };
  return (
    <>
      <div className="flex flex-row w-full">
        <AsideView
          title="KWS2100 GIS"
          className="min-w-64 h-screen flex flex-col border-2 border-black"
          childrenTop={
            <NavigatorView
              onShowLocationClick={handleShowLocationClick}
              onResetClick={handleResetClick}
              className="flex justify-around pt-2 w-full "
            />
          }
          childrenBottom={
            <ControlsView
              onClickCounties={handleCountiesClick}
              className="flex flex-col justify-center items-center w-full"
            />
          }
        />
        <MapView className="w-full h-screen border-2 border-black" map={map} />
      </div>
    </>
  );
}

export default App;
