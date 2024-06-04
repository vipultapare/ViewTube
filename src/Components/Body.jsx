import React from "react";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import { useDispatch } from "react-redux";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

export default Body;
