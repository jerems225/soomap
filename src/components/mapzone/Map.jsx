import L from 'leaflet';
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {

    const ZoomControl = () => {
        const map = useMap();

        useEffect(() => {
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
            <MapContainer center={[51.505, -0.09]} zoom={13} zoomControl={false} className="map">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl />
            </MapContainer>
        </div>
    )
}

export default Map;