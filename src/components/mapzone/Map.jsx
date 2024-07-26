import L from 'leaflet';
import React, { useEffect } from 'react';
import '@supermap/iclient-leaflet';
import { MapContainer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
    const ZoomControl = () => {
        const map = useMap();
        const url = "http://srv525080.hstgr.cloud:8090/iserver/services/map-donnees_ci-2/rest/maps/donnees_ci";
        useEffect(() => {
            new L.supermap.TiledMapLayer(url).addTo(map);

            const zoomControl = L.control.zoom({
                position: 'bottomright'
            });

            zoomControl.addTo(map);

            return () => {
                map.removeControl(zoomControl);
              };
        }, [map]);

        return null;
    }

    return (
        <div className="map_zone">
            <MapContainer crs={L.CRS.EPSG4326} center={[7 , -6]} zoom={8.45} maxZoom={18} zoomControl={false} className="map">
                <ZoomControl />
            </MapContainer>
        </div>
    )
}

export default Map;