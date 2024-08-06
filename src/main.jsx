import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Cronometro from "./routes/cronometro";
import UserList from "./routes/userList";
import Podium from "./routes/podium";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "cronometro/",
        element: <Cronometro />,
      },
      {
        path: "user-list/",
        element: <UserList />,
      },
      {
        path: "podium/",
        element: <Podium />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);  