import React from "react";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Pin from "../Pin/Pin";

const Map = ({ item }) => {
  // const position = [51.50, -0.09]
  return (
    <MapContainer
      center={
        item.length === 1
          ? [item[0].latitude, item[0].longitude]
          : [28.7041,  77.1025]
      }
      zoom={7}
      scrollWheelZoom={false}
      key={item.id}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {item.map((item) => {
        return <Pin item={item} />;
      })}
    </MapContainer>
  );
};

export default Map;
