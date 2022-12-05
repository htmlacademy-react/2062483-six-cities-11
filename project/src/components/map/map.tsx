import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import cn from 'classnames';
import {useEffect, useRef} from 'react';
import {Icon, Marker, LayerGroup} from 'leaflet';
import {Offer, Location} from '../../types/offers-type';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../constants';

type MapProps = {
  className: string;
  offers: Offer[];
  city: Location;
  selectedOffer?: number | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({className, offers, city, selectedOffer}: MapProps): JSX.Element{
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    map?.setView([city.latitude, city.longitude], city.zoom);
  }, [city, map]);

  const markerGroup = new LayerGroup();

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          offer.id === selectedOffer
            ? currentCustomIcon
            : defaultCustomIcon
        );

        markerGroup.addLayer(marker);
      });
      markerGroup.addTo(map);
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
