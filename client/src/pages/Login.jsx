import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contextApi/store";
const REACT_APP_API = "http://localhost:5000";


const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigateTo = useNavigate()

  const {auth,setAuth} = useAuth()


  // console.log(auth)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginData((_) => {
      return {
        email: "",
        password: "",
      };
    });
    // Add your Login logic here
    console.log(loginData)

    try {
      const res = await axios.post(`${REACT_APP_API}/auth/login`, {
        ...loginData,
      });



      if (res.status) {
        toast.success("Login Successful");
        navigateTo("/")
        console.log(res.data.user)
        setAuth(prev=>({...prev,user:res.data.user}))
        localStorage.setItem("activeUser",JSON.stringify(res.data.user))
      } else toast.error("Invalid Credentials -- try");
    } catch (e) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="text-indigo-800 bg-white h-[78.8vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-700">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className=" shadow-sm -space-y-px flex flex-col gap-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={loginData.email}
                autoComplete="email"
                onChange={handleChange}
                required
                className="placeholder:text-indigo-700 appearance-none rounded-md relative block w-full px-3 py-2 border border-indigo-700 placeholder-gray-400 text-indigo-800  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={loginData.password}
                type="password"
                autoComplete="current-password"
                onChange={handleChange}
                required
                className="placeholder:text-indigo-700 appearance-none relative block w-full px-3 py-2 border border-indigo-700 placeholder-gray-400 text-indigo-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <p className="text-indigo-800 font-medium py-2 text-center">
              New User ?{" "}
              <Link to="/register" className="underline">
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
