import { useEffect, useState } from 'react';
import {AiOutlinePhone} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from 'react-router-dom'

const Advertisement = () => {

  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    // Fetch location data
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => setLocationData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='flex items-center justify-between h-8 bg-indigo-800 text-white px-8'>
        <div className='flex items-center gap-1'><AiOutlinePhone /> +123456789</div>
        <div><p>Get 50% instant off <Link to="/products" className='underline px-1'>Shop Now</Link></p></div>
        <div className='flex items-center gap-4'>
            <span className='flex items-center'>
                Eng
                <IoMdArrowDropdown />
            </span>

            <span className='flex items-center'>
                {locationData?.city}
                <IoMdArrowDropdown />
            </span>
        </div>
    </div>
  )
}

export default Advertisement