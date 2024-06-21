import React, { useContext } from "react";
import "./appLayout.scss";
import Navbar from "../components/Navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../context/AppContext";

const AppLayout = () => {
  return (
    <div className="layout-main">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const AuthLayout = () => {
  const { currentUser } = useContext(Context);
  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout-main">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { AppLayout, AuthLayout };
