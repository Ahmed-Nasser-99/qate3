import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Company from "./pages/Company";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:company",
    element: <Company />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
