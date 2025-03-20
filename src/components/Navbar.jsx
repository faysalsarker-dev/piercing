import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router"; // Fixed import
import Logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navItems = [
    { name: "Hem", path: "/" },
    { name: "Piercing", path: "/piercing" },
    { name: "Öronhåltagning", path: "/oronhåltagning" },
    { name: "After Care", path: "/after-care" },
    { name: "Boka online", path: "/online-booking" },
    { name: "Kontakta oss", path: "/contactus" },
  ];

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <nav className="navbar shadow-sm md:px-6 px-3 flex justify-between items-center">
      {/* Logo Section */}
      <div className="navbar-start w-32">
        <Link to="/">
          <img className="w-28 h-12 object-contain" src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-end flex-grow hidden lg:flex justify-end overflow-hidden">
        <ul className="menu menu-horizontal gap-x-2 whitespace-nowrap">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-2 py-2 text-xl rounded-md transition-colors font-medium ${
                    isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="navbar-end lg:hidden">
        <div onClick={handleMenuToggle} className="dropdown dropdown-end relative " ref={dropdownRef}>
          <button tabIndex={0} className="p-3" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {isOpen && (
            <ul
              className="absolute right-0 top-12 menu menu-sm sec-color rounded-box z-10 w-48 p-2 shadow"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-xl rounded-md transition-colors font-medium ${
                        isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                      }`
                    }
                    onClick={handleCloseMenu} // Close menu on click
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;