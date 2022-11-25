

import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer,} from 'leaflet';
import {Location} from '../types/offers-type';

const MapSettings = {
  LAYER: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: Location
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude
        },
        zoom: 10,
        scrollWheelZoom: false
      });

      const layer = new TileLayer(
        MapSettings.LAYER,
        {
          attribution: MapSettings.ATTRIBUTION,
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
