import React, { useEffect } from "react";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ])

  return (
    <RouterProvider router={appRouter}>
      <Login/>
      <Browse/>
    </RouterProvider>
  )
  
};

export default Body;
