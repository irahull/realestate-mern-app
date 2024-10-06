import React from "react";
import "./list.scss";
import Filter from "../../components/Filter/Filter";
// import { listData } from "../../data/data";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";
import { useLoaderData } from "react-router-dom";

const List = () => {
  const posts = useLoaderData();
  return (
    <section className="listSection">
      <div className="listLeft">
        <div className="wrapper">
          <Filter />
          {posts.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
      <div className="listRight">
        <Map item={posts} />
      </div>
    </section>
  );
};

export default List;
