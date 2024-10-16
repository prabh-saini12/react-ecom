import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Kids from "./components/Kids";
import Mens from "./components/Mens";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCard />,
      },
      {
        path: "/kid",
        element: <Kids />,
      },
      {
        path: "/men",
        element: <Mens />,
      },
    ],
  },
]);

export { appRouter };
