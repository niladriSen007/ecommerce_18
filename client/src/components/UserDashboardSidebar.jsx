import { Link } from 'react-router-dom';

const UserDashboardSidebar = () => {
  return (
    <div className="bg-indigo-900 text-white w-64 min-h-screen">
      <div className="flex items-center justify-center h-16 border-b border-gray-800">
        <span className="text-xl font-semibold">User Dashboard</span>
      </div>
      <ul className="py-4">
        <li className="px-8 py-2 hover:bg-indigo-700">
          <Link to="#" className="block">
            Dashboard
          </Link>
        </li>
        <li className="px-8 py-2 hover:bg-indigo-700">
          <Link to="/dashboard/user/profile" className="block">
            Profile
          </Link>
        </li>
        <li className="px-8 py-2 hover:bg-indigo-700">
          <Link to="/dashboard/user/orders" className="block">
            Orders
          </Link>
        </li>
       
      </ul>
    </div>
  );
};

export default UserDashboardSidebar;
