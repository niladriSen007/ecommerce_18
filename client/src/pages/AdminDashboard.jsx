import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminContainer from '../components/AdminContainer'


// const AdminLayout = () => (
//   <>
//     <AdminSideBar />
//     <AdminContainer>
//       <Outlet />
//     </AdminContainer>
//   </>
// );

const AdminDashboard = () => {
  return (
    <div className='flex justify-between relative'>
      <AdminSideBar />
      <AdminContainer />
    </div>
  )
}

export default AdminDashboard