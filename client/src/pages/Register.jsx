import React, { useState } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setRegisterData({ ...registerData, [name]: value });
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
    setRegisterData((_) => {
      return {
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      };
    });
    // Add your registration logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-[78.8vh] bg-gray-100">
      <h2 className="text-4xl font-bold mb-4 text-indigo-700">Register</h2>
      <form className="w-[30vw] bg-white rounded-lg shadow-md px-6 py-8">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-indigo-700 text-md font-bold mb-2"
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
            className="block text-indigo-700 text-md font-bold mb-2"
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
            className="block text-indigo-700 text-md font-bold mb-2"
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
            className="block text-indigo-700 text-md font-bold mb-2"
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
            className="block text-indigo-700 text-md font-bold mb-2"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={registerData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:border-blue-500 focus:ring-blue-500  outline-none placeholder:text-indigo-600"
            rows="4"
            placeholder="Your Address"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
