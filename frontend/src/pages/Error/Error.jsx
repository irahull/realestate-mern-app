import React from "react";
import "./error.scss";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorWrapper">
      <span>404</span>
      <h2>Page not found</h2>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
      <Link to= "/" className="backToHome">
      <IoArrowBack />
      Back to home
      </Link>
    </div>
  );
};

export default Error;
