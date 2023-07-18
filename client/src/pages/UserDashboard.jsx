import UserDashboardSidebar from '../components/UserDashboardSidebar'
import UserDashboardMain from './UserDashboardMain'

const UserDashboard = () => {
    return (
        <div className='flex justify-between relative'>
          <UserDashboardSidebar />
          <UserDashboardMain />
        </div>
      )
}

export default UserDashboard