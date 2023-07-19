

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="bg-indigo-800 text-white  bottom-0 w-[100vw]">
      <div className="container mx-auto py-4 flex flex-col items-center justify-center">
        <p className=" mb-2 text-lg">© {year} Niladri Sen. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-lg text-white hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-lg text-white hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
