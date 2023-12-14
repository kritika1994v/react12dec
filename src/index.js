

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Miniprac from "./Miniprac";
import File2 from "./File2";


const router = createBrowserRouter([
  {
    path: "/mini",
    element: <File2></File2>,
  },

  {
    path: "/",
    element: <Miniprac></Miniprac>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


