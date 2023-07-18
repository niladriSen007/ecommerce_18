import { useState } from "react";
import {  toast } from 'react-toastify';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
const REACT_APP_API = "http://localhost:5000"


const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    secretQuestion:""
  });

  const navigateTo = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setRegisterData({ ...registerData, [name]: value });
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(registerData);
    // toast.success('Registration Successful');
    setRegisterData((_) => {
      return {
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        secretQuestion:""
      };
    });
    // Add your registration logic here

    try{
        const res = await axios.post(`${REACT_APP_API}/auth/register`,{...registerData})

        if(res.status)
          {
            toast.success("New user has been added")
            navigateTo("/login")
          }
        else
          toast.error("Please give proper information")
    }
    catch(e){
      toast.error("Invalid Credentials")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[78.8vh] bg-gray-100 py-72">
      <h2 className="text-4xl font-bold mb-4 text-indigo-700">Register</h2>
      <div className="flex items-center justify-center">
        <div>
          <form className="w-[30vw] bg-white rounded-lg shadow-md px-6 py-3 ">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-indigo-700 text-md font-bold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={registerData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:border-blue-500 focus:ring-blue-500 outline-none placeholder:text-indigo-600"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-indigo-700 text-md font-bold mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={registerData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:border-blue-500 focus:ring-blue-500  outline-none placeholder:text-indigo-600"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-indigo-700 text-md font-bold mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={registerData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:border-blue-500 focus:ring-blue-500  outline-none placeholder:text-indigo-600"
                placeholder="Your Password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-indigo-700 text-md font-bold mb-1"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={registerData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:border-blue-500 focus:ring-blue-500  outline-none placeholder:text-indigo-600"
                placeholder="Your Phone"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-indigo-700 text-md font-bold mb-1"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                value={registerData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:border-blue-500 focus:ring-blue-500  outline-none placeholder:text-indigo-600"
                rows="4"
                placeholder="Your Address"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-indigo-700 text-md font-bold mb-1"
              >
                What is your favourate animal?
              </label>
              <input
                id="secretQuestion"
                name="secretQuestion"
                value={registerData.secretQuestion}
                onChange={handleChange}
                className="w-full px-4 py-1 rounded-lg border border-indigo-300 focus:border-blue-500 focus:ring-blue-500  outline-none placeholder:text-indigo-600"
                rows="4"
                placeholder="Your Answer"
                required
              ></input>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300"
            >
              Register
            </button>
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 my-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Already have an Account? <Link to="/login" className="underline">Login here</Link></button>
          </form>
        </div>

        {/* <div className="h-96">
          <iframe
            src="https://my.spline.design/molang3dcopy-ee2d1c786e740a42368235a058072cf0/"
            className="rounded-full"
            width="100%"
            height="100%"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default Register;
