import {
  createBrowserRouter,
  Outlet
} from "react-router-dom";
import Home from '../pages/home/index.jsx'
import Login from '../pages/login/index.jsx'
import App from '../App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "home",
        Component: Home,
      },
    ]
  },
]);

export default router;