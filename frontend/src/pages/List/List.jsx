import React, { Suspense } from "react";
import "./list.scss";
import Filter from "../../components/Filter/Filter";
// import { listData } from "../../data/data";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";
import { Await, useLoaderData } from "react-router-dom";

const List = () => {
  const data = useLoaderData();

  const loaderStyle = {

    zIndex: "10",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "25px",
    width: "100%",
    height: "65vh",
  };

  // console.log(posts);
  return (
    <section className="listSection">
      <div className="listLeft">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p style={loaderStyle}>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p style={loaderStyle}>Error loading posts!</p>}
            >
              {/* this calls back when the data is resolved */}
              {(postResponse) =>
                // console.log(postResponse.data.data)
                postResponse.data.data.map((item) => {
                  return <Card item={item} />;
                })
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="listRight">
        <Suspense fallback={<p style={loaderStyle}>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p style={loaderStyle}>Error loading posts!</p>}
          >
            {(postResponse) => <Map item={postResponse.data.data} />}
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default List;
