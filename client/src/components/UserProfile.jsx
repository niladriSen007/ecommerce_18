import React from "react";

const UserProfile = () => {
  const { name, email, phone, image, address } = JSON.parse(
    localStorage.getItem("activeUser")
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center w-[60vw]">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-56 h-56 border-4 p-1 border-indigo-800 rounded-full mr-4 object-cover"
        />
      </div>
      <div className="text-start flex flex-col gap-3">
        <h2 className=" font-semibold text-3xl"> Name : {name}</h2>
        <p className="text-black font-semibold text-3xl">Email-id : {email}</p>
        <p className="text-black text-3xl font-semibold">Address: {address}</p>
        <p className="text-black text-3xl font-semibold">Phone:{phone}</p>
      </div>
    </div>
  );
};

export default UserProfile;
