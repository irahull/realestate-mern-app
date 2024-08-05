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
import { getSinglePostDetails } from "./helper/getSinglePostDetails";

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
          path: "/list",
          element: <List />,
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
        },
        {
          path: "/add",
          element: <AddPost />,
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
