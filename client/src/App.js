import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Onboarding from "./components/ui/Onboarding";
import Signin from "./components/ui/auth/Signin";
import "./App.css";

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
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
