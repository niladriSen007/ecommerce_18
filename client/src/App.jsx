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
import ProtectedDashboard from "./components/ProtectedDashboard";
import ForgetPassword from "./pages/ForgotPassword";
import CreateCategoryAdmin from "./components/CreateCategoryAdmin";
import AdminSideBar from "./components/AdminSideBar";
import AdminContainer from "./components/AdminContainer";
import CreateProductAdmin from "./components/CreateProductAdmin";
import UsersAdmin from "./components/UsersAdmin";
import UserDashboardSidebar from "./components/UserDashboardSidebar";
import UserDashboardMain from "./pages/UserDashboardMain";
import UserProfile from "./components/UserProfile";
import UserOrders from "./components/UserOrders";
import AdminProfile from "./components/AdminProfile";
import ProductsListPage from "./pages/ProductsListPage";
import NewCard from "./components/NewCard";

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


  const UserLayout = () => (
    <div className="flex justify-between">
      <UserDashboardSidebar />
      <UserDashboardMain>
        <Outlet />
      </UserDashboardMain>
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
          element: <NewCard />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/products",
          element: <ProductsListPage />,
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
              path: "/dashboard",
              element: <AdminProfile />,
            },
            {
              path: "/dashboard/admin/adminProfile",
              element: <AdminProfile />,
            },
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
          path: "/dashboard",
          element: <UserLayout />,
          children: [
            {
              path: "/dashboard/user/Profile",
              element: <UserProfile />,
            },
            {
              path: "/dashboard/user/orders",
              element: <UserOrders />,
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
