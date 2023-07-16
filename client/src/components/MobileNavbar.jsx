import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  return (
    <div className="md:hidden px-2">
          <div className="px-12 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="#" className="text-gray-300 hover:text-white block">
              Home
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white block">
              Products
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white block">
              Categories
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white block">
              Contact
            </Link>
          </div>
        </div>
  )
}

export default MobileNavbar