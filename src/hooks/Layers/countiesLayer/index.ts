import { FeatureLike } from 'ol/Feature';
import { GeoJSON } from 'ol/format';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Stroke, Style, Text } from 'ol/style';
import { useMemo } from 'react';

type KommuneNavnProps = {
  navn: {
    sprak: string;
    navn: string;
  }[];
};
/**
 *
 * @returns {VectorLayer} counties layer
 */
const useCountiesLayer = () => {
  const getKommuneNavn = (feature: FeatureLike) => {
    const prop = feature.getProperties() as KommuneNavnProps;
    return prop.navn.find((n) => n.sprak === 'nor')?.navn;
  };
  return useMemo(() => {
    return new VectorLayer({
      source: new VectorSource({
        url: '/counties.json',
        format: new GeoJSON(),
      }),
      style: (feature: FeatureLike) => {
        return new Style({
          stroke: new Stroke({ color: 'crimson' }),
          text: new Text({ text: getKommuneNavn(feature) }),
        });
      },
    });
  }, []);
};
export default useCountiesLayer;
