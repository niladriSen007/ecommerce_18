import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'

const DesktopNavbar = ({isMenuOpen,setMenuOpen}) => {


    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };


  return (
    <div className="px-32 shadow-lg">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="#" className="text-indigo-800 text-3xl font-bold">
              IndiaMart
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="#" className="text-indigo-800  text-xl hover:text-indigo-900">
              Home
            </Link>
            <Link to="#" className="text-indigo-800  text-xl hover:text-indigo-900">
              Products
            </Link>
            <Link to="#" className="text-indigo-800  text-xl hover:text-indigo-900">
              Categories
            </Link>
            <Link to="#" className="text-indigo-800  text-xl hover:text-indigo-900">
              Contact
            </Link>
          </div>
          <div className='flex items-center gap-6'>
            <input type="text" className='border-2 border-gray-300 px-2 outline-none rounded-md' placeholder='🔍Search Product' />
            <div className='flex items-center gap-1'>
                <AiOutlineShoppingCart className='text-indigo-800' size={24}/>
                <Link to="#" className="text-indigo-800  text-xl hover:text-indigo-900">
              Cart
            </Link>
            </div>
            <div className='flex items-center gap-1'>
                <MdAccountCircle className='text-indigo-800' size={24}/>
                <Link to="#" className="text-indigo-800  text-xl hover:text-indigo-900">
              Account
            </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
  )
}

export default DesktopNavbar