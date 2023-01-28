import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";
import Onboarding from "./onboarding/Onboarding";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import Verify from "./verify/Verify";
import Verified from "./verifiy-success/Verified";

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
    {
      path: "/verify",
      element: <Verify />,
    },
    {
      path: "/verified",
      element: <Verified />,
    },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
