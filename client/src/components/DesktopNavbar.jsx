import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { useAuth } from "../contextApi/store";
import { toast } from "react-toastify";
import { useState } from "react";
import { useCategory } from "../hooks/useCategory";
import { useCart } from "../contextApi/cart";

const DesktopNavbar = ({ isMenuOpen, setMenuOpen }) => {
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { auth, setAuth } = useAuth();

  // console.log(auth);

  const logoffUser = () => {
    setAuth((_) => ({ ..._, user: "" }));
    localStorage.removeItem("activeUser");
    toast.success("Logged out successfully");
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

const allCategories = useCategory()




//console.log(allCategories)

const {cartItem} = useCart()

// const options = [
//   { label: 'Option 1', value: 'option-1' },
//   { label: 'Option 2', value: 'option-2' },
//   { label: 'Option 3', value: 'option-3' },
// ];

  return (
    <div className="px-32 shadow-lg">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="text-indigo-800 text-3xl font-bold">
            IndiaMart
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className="text-indigo-800  text-xl font-medium hover:text-indigo-900"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-indigo-800  text-xl font-medium hover:text-indigo-900"
          >
            Products
          </Link>
          <Link
            to="#"
            className="text-indigo-800  text-xl font-medium hover:text-indigo-900" onClick={toggleDropdown}
          >
            Categories
            <div className="relative inline-block">
              {/* <button
                
                className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              >
                Select an option
              </button> */}
              {isOpen && (
                <ul
                  className="absolute top-full right-0 mt-2 py-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                  aria-label="dropdown-menu"
                >
                  {allCategories?.map((option) => (
                    <li
                      key={option._id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <Link to={`/products/category/${option._id}`}>{option.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Link>
          {/* {(auth?.user?.role!== 0 && auth?.user!=="") && <Link
            to="/dashboard"
            className="text-indigo-800  text-xl font-medium hover:text-indigo-900"
          >
            Dashboard
          </Link>} */}{" "}
          <Link
            to="/dashboard"
            className="text-indigo-800  text-xl font-medium hover:text-indigo-900"
          >
            Dashboard
          </Link>
          <Link
            to="/contact"
            className="text-indigo-800  text-xl font-medium hover:text-indigo-900"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <input
            type="text"
            className="border-2 border-gray-300 px-2 outline-none rounded-md placeholder:text-indigo-800"
            placeholder="🔍Search Product"
          />
          { auth?.user && <div className="flex items-center gap-1">
            <AiOutlineShoppingCart className="text-indigo-800" size={24} />
            <Link
              to="/users/cart"
              className="text-indigo-800  text-xl hover:text-indigo-900 flex"
            >
              Cart
              <p className="absolute top-10 right-[16.5vw] bg-indigo-700 text-white p-2 rounded-full flex items-center justify-center w-6 h-6"> {cartItem?.length}</p>
            </Link>
          </div>}
          <div className="flex items-center gap-1">
            <MdAccountCircle className="text-indigo-800" size={24} />
            <Link
              to="#"
              className="text-indigo-800  text-xl hover:text-indigo-900"
            >
              <span>{auth ? auth?.user?.name : "Account"}</span>
            </Link>
          </div>
          <Link
            to={`/login`}
            className="text-indigo-800  text-xl font-medium hover:text-indigo-900"
          >
            {auth?.user ? (
              <button
                className="bg-indigo-700 text-white px-2 py-1 rounded-sm"
                onClick={logoffUser}
              >
                Sign Out
              </button>
            ) : (
              <button className="bg-indigo-700 text-white px-2 py-1 rounded-sm">
                Login
              </button>
            )}
          </Link>
          {!auth?.user && (
            <Link
              to="/register"
              className="text-indigo-800  text-xl font-medium hover:text-indigo-900"
            >
              <button className="text-indigo-800 bg-white px-2 py-1 rounded-sm border-2 border-indigo-700">
                Register
              </button>
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
