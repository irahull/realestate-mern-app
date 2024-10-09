import React from "react";
import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout, AuthLayout } from "./layouts/AppLayout";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import SinglePost from "./pages/SinglePost/SinglePost";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import EditUser from "./utils/EditUser/EditUser";
import AddPost from "./utils/AddPost/AddPost";
import { getSinglePostDetails, getUserPosts, searchLoader } from "./helper/apiLoaders";
import Error from "./pages/Error/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "*",
          element: <Error />,
        },
        {
          path: "/list",
          element: <List />,
          loader:searchLoader,
        },
        {
          path: "/post/:id",
          element: <SinglePost />,
          loader:getSinglePostDetails,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
          loader:getUserPosts,
        },
        {
          path: "/add",
          element: <AddPost />,
        },
        {
          path: "*",
          element: <Error />,
        },
        {
          path: "/edit/:id",
          element: <EditUser />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
