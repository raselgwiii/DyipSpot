import { useState } from 'react'
import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import _Layout from "./pages/_Layout.jsx";
import Home from "./pages/Home.jsx";
import Track from "./pages/Track.jsx";
import Settings from "./pages/Settings.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <_Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/track',
                element: <Track />,
            },
            {
                path: '/settings',
                element: <Settings />,
            }
        ],
    },
]);

function App() {

  const [count, setCount] = useState(0)

  return (
    <>

<RouterProvider router={router}/>

    </>
  )
}

export default App
