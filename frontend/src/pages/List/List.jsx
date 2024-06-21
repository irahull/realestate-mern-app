import React from "react";
import "./list.scss";
import Filter from "../../components/Filter/Filter";
import { listData } from "../../data/data";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";

const List = () => {
  return (
    <section className="listSection">
      <div className="listLeft">
        <div className="wrapper">
          <Filter />
          {listData.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
      <div className="listRight">
        <Map item={listData} />
      </div>
    </section>
  );
};

export default List;
