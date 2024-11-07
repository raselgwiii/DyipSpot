import React, { useRef, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Source, Layer } from 'react-map-gl';
import { MercatorCoordinate } from 'mapbox-gl';
import useFetchLocation from "../CustomHooks/useFetchLocation.js";
import pin from "../assets/passengericon.png"; // Ensure the path is correct
import jeepPin from "../assets/pin4.png" // Ensure the path is correct

export default function RenderMap() {
    const mapRef = useRef(null);
    const [userLocationData] = useFetchLocation("users");
    const [driverLocationData] = useFetchLocation("drivers");

    const PassengerLocationMarker = {
        type: 'FeatureCollection',
        features: userLocationData?.map(user => ({
            type: 'Feature',
            properties: {
                icon: 'passenger-pin', // Custom icon for passenger
                id: user?.id,
                name: user?.first,
                role: user?.role,
            },
            geometry: {
                type: 'Point',
                coordinates: [user?.longitude, user?.latitude],
            },
        })),
    };

    const DriverLocationMarker = {
        type: 'FeatureCollection',
        features: driverLocationData?.map(user => ({
            type: 'Feature',
            properties: {
                icon: 'driver-pin', // Custom icon for drivers
                id: user?.id,
                name: user?.name,
                startpoint: user?.startpoint,
                endpoint: user?.endpoint,
            },
            geometry: {
                type: 'Point',
                coordinates: [user?.longitude, user?.latitude],
            },
        })),
    };

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.getMap().on('load', () => {
                // Register the custom images
                mapRef.current.getMap().loadImage(pin, (error, image) => {
                    if (error) throw error;
                    mapRef.current.getMap().addImage('passenger-pin', image);
                });
                mapRef.current.getMap().loadImage(jeepPin, (error, image) => {
                    if (error) throw error;
                    mapRef.current.getMap().addImage('driver-pin', image);
                });
            });
        }
    }, []);

    return (
        <Map
            ref={mapRef}
            mapboxAccessToken="pk.eyJ1IjoiamlvdmFuaTEyMyIsImEiOiJjbHl5ZDZhbzcxY2s3Mm5zbG1taWZ1MDBjIn0.1nOWIuN47R6lsU1QXp40KQ"
            initialViewState={{
                longitude: 120.44945048835295,
                latitude: 16.931683021499,
                zoom: 17,
                bearing: 0,
                pitch: 50,
            }}
            mapStyle="mapbox://styles/mapbox/standard"
        >
            <Source
                id="passenger-locations"
                type="geojson"
                data={PassengerLocationMarker}
                cluster={true}
                clusterMaxZoom={14}
                clusterRadius={50}
            >
                <Layer
                    id="passenger-clusters"
                    type="circle"
                    filter={['has', 'point_count']}
                    paint={{
                        'circle-color': '#51bbd6',
                        'circle-radius': [
                            'step',
                            ['get', 'point_count'],
                            20,
                            100,
                            30,
                            750,
                            40,
                        ],
                    }}
                />
                <Layer
                    id="passenger-cluster-count"
                    type="symbol"
                    filter={['has', 'point_count']}
                    layout={{
                        'text-field': '{point_count_abbreviated}',
                        'text-size': 12,
                    }}
                />
                <Layer
                    id="passenger-points"
                    type="symbol"
                    filter={['!', ['has', 'point_count']]}
                    layout={{
                        "icon-allow-overlap": true,
                        'icon-image': 'passenger-pin', // Use the custom pin image for passengers
                        'icon-size': 0.5,
                    }}
                />
            </Source>

            <Source
                id="driver-locations"
                type="geojson"
                data={DriverLocationMarker}
                cluster={true}
                clusterMaxZoom={14}
                clusterRadius={50}
            >
                <Layer
                    id="driver-clusters"
                    type="circle"
                    filter={['has', 'point_count']}
                    paint={{
                        'circle-color': '#f28cb1',
                        'circle-radius': [
                            'step',
                            ['get', 'point_count'],
                            20,
                            100,
                            30,
                            750,
                            40,
                        ],
                    }}
                />
                <Layer
                    id="driver-cluster-count"
                    type="symbol"
                    filter={['has', 'point_count']}
                    layout={{
                        'text-field': '{point_count_abbreviated}',
                        'text-size': 12,
                    }}
                />
                <Layer
                    id="driver-points"
                    type="symbol"
                    filter={['!', ['has', 'point_count']]}
                    layout={{
                        "icon-allow-overlap": true,
                        'icon-image': 'driver-pin', // Use the custom jeep pin for drivers
                        'icon-size': 0.5,
                    }}
                />
            </Source>
        </Map>
    );
}
