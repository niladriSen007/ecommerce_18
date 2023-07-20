import axios from "axios";
import React, { useEffect, useState } from "react";
import CardUser from "./CardUser";
const REACT_APP_API = "http://localhost:5000";
const UsersAdmin = () => {
  const [allUsers, setAllUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get(`${REACT_APP_API}/user/admin/allUsers`);
    console.log(data.users);
    setAllUsers(data.users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="px-3">
      <p className="text-indigo-600 text-3xl font-bold">Our Users Are  - </p>
      <div className="flex gap-16 py-8">
        {allUsers.map((eachUser) => (
          <div key={eachUser._id} className="w-56 p-3 cursor-pointer">
            {/* <p className="text-xl text-indigo-700">Name - {eachUser.name}</p>
            <p className="text-xl text-indigo-700">Email - {eachUser.email}</p>
            <p className="text-xl text-indigo-700">Address - {eachUser.address}</p>
            <p className="text-xl text-indigo-700">Phone - {eachUser.phone}</p> */}
            
              <CardUser name={eachUser.name} email={eachUser.email} phone={eachUser.phone} address={eachUser.address} image={eachUser.image} role={eachUser.role}/>

          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersAdmin;
