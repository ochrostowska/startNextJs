"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

type Props = {
  height?: number;
  center: google.maps.LatLngLiteral;
  mapsKey: string;
};

const GoogleMapComponent = ({ height, center, mapsKey }: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ ...containerStyle, height }}
      center={center}
      zoom={18}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
