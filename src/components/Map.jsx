import React, { useRef, useState, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Source, Layer } from 'react-map-gl';
import pin from "../assets/passengericon.png"; // Ensure path is correct
import jeepPin from "../assets/jeepLogoPin.png";
import useFetchLocation from "../CustomHooks/useFetchLocation.js"; // Ensure path is correct

export default function RenderMap() {
    const mapRef = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    const [userLocationData] = useFetchLocation("users");
    const [driverLocationData] = useFetchLocation("drivers");

    // Data for passengers and drivers
    const PassengerLocationMarker = {
        type: 'FeatureCollection',
        features: userLocationData?.map(user => ({
            type: 'Feature',
            properties: {
                icon: 'passenger-pin',
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
                icon: 'driver-pin',
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

    // Function to load images (used in onLoad and styleimagemissing)
    const loadImage = (mapInstance, imagePath, imageId) => {
        mapInstance.loadImage(imagePath, (error, image) => {
            if (error) {
                console.error(`Error loading ${imageId} pin:`, error);
                return;
            }
            if (!mapInstance.hasImage(imageId)) {
                mapInstance.addImage(imageId, image);
            }
        });
    };

    // Callback to handle map load event
    const handleMapLoad = () => {
        setMapLoaded(true);
        const mapInstance = mapRef.current.getMap();

        // Load and add custom images when map is loaded
        if (mapInstance) {
            mapInstance.on('load', () => {
                loadImage(mapInstance, pin, 'passenger-pin');
                loadImage(mapInstance, jeepPin, 'driver-pin');
            });

            // Handle missing images event
            mapInstance.on('styleimagemissing', (e) => {
                if (e.id === 'passenger-pin') {
                    console.log('Passenger pin image is missing, adding it...');
                    loadImage(mapInstance, pin, 'passenger-pin');
                }

                if (e.id === 'driver-pin') {
                    console.log('Driver pin image is missing, adding it...');
                    loadImage(mapInstance, jeepPin, 'driver-pin');
                }
            });
        }
    };

    useEffect(() => {
        if (mapLoaded && mapRef.current) {
            const mapInstance = mapRef.current.getMap();
            if (mapInstance) {
                mapInstance.on('load', () => {
                    loadImage(mapInstance, pin, 'passenger-pin');
                    loadImage(mapInstance, jeepPin, 'driver-pin');
                });
            }
        }
    }, [mapLoaded]); // Ensure images are added after map load

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
            onLoad={handleMapLoad} // Use the onLoad prop to set mapLoaded state
        >
            {mapLoaded && (
                <>
                    {/* Passenger Location Marker Source and Layers */}
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

                    {/* Driver Location Marker Source and Layers */}
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
                                'icon-size': 0.3,
                            }}
                        />
                    </Source>
                </>
            )}
        </Map>
    );
}
