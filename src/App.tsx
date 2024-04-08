import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import CharaterDetailsPage from "./pages/CharaterDetailsPage";
import ErrorPage from "./core-ui/ErrorPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <CharaterDetailsPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
