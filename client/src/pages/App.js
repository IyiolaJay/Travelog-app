import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";
import Onboarding from "./onboarding/Onboarding";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Onboarding />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
