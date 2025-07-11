import House from "./pages/House";
import Home from "./pages/Home";
import Tjm from "./pages/Tjm";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tjm",
    element: <Tjm />,
  },
  {
    path: "/house",
    element: <House />,
  }


])

export default router;