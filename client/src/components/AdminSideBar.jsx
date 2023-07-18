import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  return (
    <div className="bg-indigo-900 text-white w-64 min-h-screen">
      <div className="flex items-center justify-center h-16 border-b border-gray-800">
        <span className="text-xl font-semibold">Admin Dashboard</span>
      </div>
      <ul className="py-4">
        <li className="px-8 py-2 hover:bg-indigo-700">
          <Link to="#" className="block">
            Dashboard
          </Link>
        </li>
        <li className="px-8 py-2 hover:bg-indigo-700">
          <Link to="/dashboard/admin/users" className="block">
            Users
          </Link>
        </li>
        <li className="px-8 py-2 hover:bg-indigo-700">
          <Link to="/dashboard/admin/createCategory" className="block">
            Create Categories
          </Link>
        </li>
        <li className="px-8 py-2 hover:bg-indigo-700">
          <Link to="/dashboard/admin/createProduct" className="block">
          Create Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideBar;
