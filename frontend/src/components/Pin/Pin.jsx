import React from "react";
import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupWrapper">
          <img src={item.img} alt="" />
          <div className="textWrapper">
            <Link to={`/post/${item.id}`}>{item.title}</Link>
            <span className="bedCount">{item.bedroom} bedroom</span>
            <b>{item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
