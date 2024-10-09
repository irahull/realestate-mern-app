import React, { useContext } from "react";
import "./home.scss";
import Search from "../../components/SearchBar/Search";
import { Context } from "../../context/AppContext";
import Featured from "./featured/Featured";
import Location from "./location/Location";
import Contact from "./Contact/Contact";
const Home = () => {
  const isUser = useContext(Context);
  console.log(isUser);
  return (
    <>
      <section className="homeSection">
        <div className="homeLeft">
          <div className="homeLeftWrapper">
            <h1>Find Real State & Get Your Dream Place</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis anim id est laborum.
            </p>
            <Search />
            <div className="homeBottom">
              <div className="homeBox">
                <h2>16+</h2>
                <h3>Years of Experience</h3>
              </div>
              <div className="homeBox">
                <h2>200</h2>
                <h3>Award Gained</h3>
              </div>
              <div className="homeBox">
                <h2>1200+</h2>
                <h3>Property Ready</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="homeRight">
          <img src="/bg.png" alt="" />
        </div>
      </section>
      <Featured/>
      <Location/>
      <Contact/>
      
    </>
  );
};

export default Home;
