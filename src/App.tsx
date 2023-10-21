import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Company from "./pages/company/Company";
import Header from "./components/Header";

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
  const { company } = useParams();
  return (
    <React.StrictMode>
      <Header showExtraParagraph={!company} />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
