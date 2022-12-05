import React from "react";
import { motion } from "framer-motion";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const mapStyle = {
  width: "50vw",
  height: "45vh",
  borderRadius: "20px",
  // border: "4px solid white",
  // marginTop: "-2rem",
};

const center = { lat: -16.816309, lng: 145.686738 };

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAxrrvwuspgkZ7eFGiZJ_AuKDnIRaZkAmI",
  });

  const [map, setMap] = React.useState(null);

  const zoom = 16;

  return (
    isLoaded && (
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            y: 5,
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            y: -5,
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          },
        }}
      >
        <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={zoom}>
          <Marker
            position={center}
            icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
          ></Marker>
        </GoogleMap>
      </motion.div>
    )
  );
};

export default React.memo(Map);
