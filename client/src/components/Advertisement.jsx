import {AiOutlinePhone} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from 'react-router-dom'

const Advertisement = () => {
  return (
    <div className='flex items-center justify-between h-8 bg-indigo-800 text-white px-8'>
        <div className='flex items-center gap-1'><AiOutlinePhone /> +123456789</div>
        <div><p>Get 50% instant off <Link to="#" className='underline px-1'>Shop Now</Link></p></div>
        <div className='flex items-center gap-4'>
            <span className='flex items-center'>
                Eng
                <IoMdArrowDropdown />
            </span>

            <span className='flex items-center'>
                Kolkata
                <IoMdArrowDropdown />
            </span>
        </div>
    </div>
  )
}

export default Advertisement