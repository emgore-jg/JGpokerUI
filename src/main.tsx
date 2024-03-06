import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import HomePage from "./screens/HomePage";

import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Playground from "./screens/Playground.tsx";

// TODO: Implement nav info as an array, to be passed to navBar/other nav solution
// interface NavInfo {
//   id: string;
//   children: React.ReactNode,
//   path: string;
// }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!); // createRoot(container!) if you use TypeScript
//Search browser storage and grab OAuth token. If found 'loggedIn' = true;
//If found, set user.token = browserStorage.token
const router = createBrowserRouter([
    {
        path: '/home',
        element: <App children={<HomePage/>}/>,
        children:   []
    },  
    {
      path: '/playground',
      element: <App children={<Playground/>}/>,
      children:   []
    },
    {// Keep this last
        path: '*',
        element: <span>ERROR PAGE NOT FOUND</span>
    }

])

root.render(
    <React.StrictMode>
      <RouterProvider router={router} ></RouterProvider>
    </React.StrictMode>
);