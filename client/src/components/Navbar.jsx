import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="">
        <DesktopNavbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
      {isMenuOpen && (
        <MobileNavbar />
      )}
    </nav>
  );
};

export default Navbar;
