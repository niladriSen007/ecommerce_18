import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Advertisement from './components/Advertisement';

const App = () => {

  const Layout = () =>(
    <div>
          <Advertisement />
          <Navbar />
           <div style={{flex:"4"}}>
                <Outlet />
          </div>
    </div>
  )

  const router = createBrowserRouter([
    {
      path: "/",
      element:(
           <Layout />
      ),
      children:[
       {
        path:"/",
        element:<Hero />
       }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App