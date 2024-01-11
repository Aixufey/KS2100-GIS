import { FeatureLike } from 'ol/Feature';
import { GeoJSON } from 'ol/format';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import { useMemo } from 'react';

/**
 *
 * @returns {VectorLayer} counties layer
 */
const useCountiesLayer = () => {
  return useMemo(() => {
    return new VectorLayer({
      source: new VectorSource({
        url: '/counties.json',
        format: new GeoJSON(),
      }),
      style: (feature: FeatureLike) => {
        return new Style({
          stroke: new Stroke({ color: 'crimson' }),
        });
      },
    });
  }, []);
};
export default useCountiesLayer;
