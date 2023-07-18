import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Advertisement from "./components/Advertisement";
import Card from "./components/Card";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedDashboard from "./components/ProtectedDashboard";
import ForgetPassword from "./pages/ForgotPassword";
import CreateCategoryAdmin from "./components/CreateCategoryAdmin";
import AdminSideBar from "./components/AdminSideBar";
import AdminContainer from "./components/AdminContainer";
import CreateProductAdmin from "./components/CreateProductAdmin";
import AdminDashboard from "./pages/AdminDashboard";
import UsersAdmin from "./components/UsersAdmin";

const App = () => {
  const Layout = () => (
    <div>
      <Advertisement />
      <Navbar />
      <div style={{ flex: "4" }}>
        <ToastContainer />
        <Outlet />
      </div>
      <Footer />
    </div>
  );

  const AdminLayout = () => (
    <div className="flex justify-between">
      <AdminSideBar />
      <AdminContainer>
        <Outlet />
      </AdminContainer>
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/card",
          element: <Card title={"Hello"} content={"Niladri"} />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forgotpassword",
          element: <ForgetPassword />,
        },
        {
          path: "/dashboard",
          element: <ProtectedDashboard />,
        },
        {
          path: "/dashboard",
          element: <AdminLayout />,
          children: [
            {
              path: "/dashboard/admin/createCategory",
              element: <CreateCategoryAdmin />,
            },
            {
              path: "/dashboard/admin/createProduct",
              element: <CreateProductAdmin />,
            },
            {
              path: "/dashboard/admin/users",
              element: <UsersAdmin />,
            },
          ],
        },
        {
          path: "/*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
