import React from "react";
// import Heading from "../../common/Heading"
import { location } from "../../../data/data";
import "./style.scss";

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <div className="locationHeading">
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "600",
              }}
            >
              Explore By Location
            </h1>
            <p>
              Discover top attractions and local favorites with curated
              recommendations <br />
              based on your location for an unforgettable experience
            </p>
          </div>

          <div className="content grid3 mtop">
            {location.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.cover} alt="" />
                <div className="overlay">
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
