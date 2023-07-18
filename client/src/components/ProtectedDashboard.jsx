import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dashboard from '../pages/Dashboard';
import NotAuthorizedPage from '../pages/NotAuthorized';
import AdminDashboard from '../pages/AdminDashboard';
const REACT_APP_API = "http://localhost:5000";


const ProtectedDashboard = () => {
    const [isAdmin,setIsAdmin] = useState()
    const [isUser,setIsUser] = useState()
    const showDashboard = async() =>{
        const user = localStorage.getItem("activeUser")
        const parseData = JSON.parse(user)
        console.log(parseData)
        const {data} = await axios.post(`${REACT_APP_API}/auth/dashboard`,{parseData})
        setIsAdmin(data.admin)
        setIsUser(data.user)
        console.log(data.success)
    }
    useEffect(()=>{
        showDashboard();
    },[])
  return (
    <div>
        {
            isAdmin === true ? <AdminDashboard /> : ( isUser === true ?<Dashboard /> : <NotAuthorizedPage />)
        }
    </div>
  )
}

export default ProtectedDashboard