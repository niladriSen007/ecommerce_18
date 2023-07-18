import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NotAuthorizedPage = ({path = "login"}) => {

  const navigateTo = useNavigate()

  const location = useLocation()

  const [count,setCount] = useState(5)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(prev=>prev-1)
    },1000)
    count === 0 && navigateTo(`/${path}`,{state:location.pathname})
    return ()=>clearInterval(interval)
  },[count,navigateTo,location,path])

  return (
    <div className="flex flex-col h-[78.8vh] items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-800">
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Oops!😥</h1>
        <p className="text-gray-700 mb-6">You are not authorized to access this page.</p>
        <Link
          to="/"
          className="inline-block px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-800 rounded-lg transition-colors duration-300"
        >
          Redirecting to home in {count} seconds
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorizedPage;
