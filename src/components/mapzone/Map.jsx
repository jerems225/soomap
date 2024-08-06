import L from 'leaflet';
import React, { useEffect, useState } from 'react';
import '@supermap/iclient-leaflet';
import { MapContainer, useMap } from 'react-leaflet';
import maps from '../../utils/datas/maps';
import { searchFeatures } from '../../utils/helpers';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import markerLogo from './marker/marker.svg';

const Map = () => {
    const ZoomControl = () => {
        const map = useMap();
        useEffect(() => {
            new L.supermap.TiledMapLayer(maps.civ.url).addTo(map);
            const zoomControl = L.control.zoom({
                position: 'bottomright'
            });
            zoomControl.addTo(map);

            return () => {
                map.removeControl(zoomControl);
            };
        }, [map]);
        return null;
    };

    const SearchFeature = () => {
        const map = useMap();
        useEffect(() => {
            searchFeatures('ecole').then(features => {
                features.forEach((feature) => {
                    const geometry = feature.geometry;
                    const coordinates = geometry.coordinates;
                    const latLng = [coordinates[1], coordinates[0]];

                    const customIcon = L.icon({
                        iconUrl: markerLogo,
                        iconSize: [38, 38],
                        iconAnchor: [20, 40],
                        popupAnchor: [-3, -76]
                    });

                    const marker = L.marker(latLng, { icon: customIcon });
                    marker.addTo(map);

                    return () => {
                        map.removeLayer(marker);
                    };
                });
                
            });


        }, [map]);

        return null;
    };

    return (
        <div className="map_zone">
            <MapContainer crs={L.CRS.EPSG4326} center={[7, -6]} zoom={8.45} maxZoom={18} zoomControl={false} className="map">
                <ZoomControl />
                <SearchFeature />
            </MapContainer>
        </div>
    );
};

export default Map;
