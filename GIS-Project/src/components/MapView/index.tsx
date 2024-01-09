import { Map } from 'ol';
import { memo, useEffect, useRef } from 'react';

type MapProp = {
  map: Map;
  className: string;
};
/**
 *
 * @param Map object
 * @returns Container Component of the Map
 */
const MapView: React.FC<MapProp> = ({ map, className }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      map.setTarget(mapRef.current);
    }
  }, []);

  return <div className={className} ref={mapRef} />;
};

const MemoizedMapView = memo(MapView, (prevProp, nextProp) => {
  return prevProp.map === nextProp.map;
});

export default MemoizedMapView;
