import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";
import Onboarding from "./onboarding/Onboarding";
import SigninPage from "./signin/Signin";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Onboarding />,
    },
    {
      path: "/signin",
      element: <SigninPage />,
    },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
