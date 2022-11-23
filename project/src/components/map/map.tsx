import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import cn from 'classnames';
import {useEffect, useRef} from 'react';
import {Icon, Marker, LayerGroup} from 'leaflet';
import {Offer, Location} from '../../types/offers-type';
import {URL_MARKER_DEFAULT} from '../../constants';

type MapProps = {
  className: string;
  offers: Offer[];
  city: Location;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({className, offers, city}: MapProps): JSX.Element{
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const markerGroup = new LayerGroup();

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);

        markerGroup.addLayer(marker);
      });
    }
    return () => {
      markerGroup.clearLayers();
    };
  });

  return (
    <section className={cn(className, 'map')} ref={mapRef} />
  );
}

export default Map;
