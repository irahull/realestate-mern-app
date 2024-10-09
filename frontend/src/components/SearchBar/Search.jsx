import React, { useState } from "react";
import "./search.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

const Search = () => {
  const [query, setQuery] = useState({
    type: "rent",
    city: "",
    minPrice: 0,
    maxPrice: 1000000,
  });

  const switchType = (type) => {
    setQuery({ ...query, type: type });
  };

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  return (
    <div className="searchBar">
      <div className="typeSelect">
        {types.map((item, type) => {
          return (
            <button
              key={type}
              onClick={() => switchType(item)}
              className={query.type === item ? "active" : ""}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="inpBox">
        <input
          type="text"
          name="city"
          placeholder="City Location"
          className="location"
          value={query.city}
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min"
          className="minVal"
          value={query.minPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max"
          value={query.maxPrice}
          onChange={handleChange}
          className="maxVal"
        />
        <Link
          to={`/list?type=${query.type}&minPrice=${query.minPrice}&city=${query.city}&maxPrice=${query.maxPrice}`}
          className="searchIcon"
        >
          <img src="/search.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Search;
