
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from './components/Navbar'
import Advertisement from './components/Advertisement';
import Card from './components/Card';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";

const App = () => {

  const Layout = () =>(
    <div>
          <Advertisement />
          <Navbar />
           <div style={{flex:"4"}}>
                <ToastContainer />
                <Outlet />
          </div>
          <Footer />
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
        element:<HomePage />
       },
       {
        path:"/card",
        element:<Card title={"Hello"} content={"Niladri"}/>
       },
       {
        path:"/contact",
        element:<Contact />
       },
       {
        path:"/register",
        element:<Register />
       },
       {
        path:"/login",
        element:<Login />
       },
       {
        path:"/*",
        element:<PageNotFound/>
       }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App