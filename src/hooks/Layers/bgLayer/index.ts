import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useMemo } from 'react';

/**
 *
 * @returns {TileLayer} background layer
 */
const useBackgroundLayer = () => {
  return useMemo(() => {
    return new TileLayer({
      source: new OSM(),
    });
  }, []);
};
export default useBackgroundLayer;
