import { Map } from 'ol';
import { memo, useEffect, useRef } from 'react';

type MapProp = {
  map: Map;
};
/**
 *
 * @param Map object
 * @returns Container Component of the Map
 */
const MapView: React.FC<MapProp> = ({ map }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      map.setTarget(mapRef.current);
    }
  }, []);

  return <div style={{ width: '100vw', height: '100vh' }} ref={mapRef} />;
};

const MemoizedMapView = memo(MapView, (prevProp, nextProp) => {
  return prevProp.map === nextProp.map;
});

export default MemoizedMapView;
