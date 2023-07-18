import { useEffect, useState } from 'react'
import axios from 'axios'
import UserDashboardMain from '../pages/UserDashboardMain';
import NotAuthorizedPage from '../pages/NotAuthorized';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';
const REACT_APP_API = "http://localhost:5000";


const ProtectedDashboard = () => {
    const [isAdmin,setIsAdmin] = useState()
    const [isUser,setIsUser] = useState()
    const showDashboard = async() =>{
        const user = localStorage.getItem("activeUser")
        const parseData = JSON.parse(user)
        console.log(parseData)
        const {data} = await axios.post(`${REACT_APP_API}/auth/dashboard`,{parseData})
        console.log(data)
        setIsAdmin(data.admin)
        setIsUser(data)
        console.log(data.success)
    }
    useEffect(()=>{
        showDashboard();
    },[])
  return (
    <div>
        {
            isAdmin === true ? <AdminDashboard /> : ( isUser?.user === true ?<UserDashboard /> : <NotAuthorizedPage />)
        }
    </div>
  )
}

export default ProtectedDashboard