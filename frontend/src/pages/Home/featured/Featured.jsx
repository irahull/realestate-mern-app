import React from "react"
import "./featured.scss"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <div className="featureText">
          <h2          style={{
                fontSize: "30px",
                fontWeight: "600",
              }}>Featured Property Types </h2>
          <p>Find All Type of Property.</p>
          </div>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
