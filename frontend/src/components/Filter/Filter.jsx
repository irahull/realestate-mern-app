import React, { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    // property: searchParams.get("property") || "",
    maxPrice: searchParams.get("maxPrice") || 1000000,
    minPrice: searchParams.get("minPrice") || 0,
    // bedroom: searchParams.get("bedroom") || 1,
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className="filter">
      <div className="filterTitle">
        Search result for <b>{searchParams.get("city")}</b>
      </div>
      <div className="filterBox">
        <span>Location</span>
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          defaultValue={query.city}
          onChange={handleChange}
        />
      </div>
      <div className="filterCategory">
        <div className="filterType">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            defaultValue={query.type}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        {/* <div className="filterProperty">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            defaultValue={query.property}
            onChange={handleChange}
          >
            <option value="any">Any</option>
            <option value="farm">Farm</option>
            <option value="buy">House</option>
            <option value="rent">Land</option>
          </select>
        </div> */}
        <div className="filterMin">
          <label htmlFor="minPrice">MinPrice</label>
          <input
            type="number"
            placeholder="0"
            name="minPrice"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="filterMax">
          <label htmlFor="maxPrice">MaxPrice</label>
          <input
            type="number"
            placeholder="0"
            name="maxPrice"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        {/* <div className="filterBedroom">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            placeholder="0"
            name="bedroom"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div> */}
        <div className="filterSearch" onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
