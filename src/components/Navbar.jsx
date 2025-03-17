import React from "react";
import { Link, NavLink } from "react-router"; // Fix the import to 'react-router-dom'
import Logo from "/logo.png";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Online Booking", path: "/online-booking" },  // Updated name
    { name: "Contact Us", path: "/contactus" },         // Updated name
    // { name: "About Us", path: "/aboutus" },             // Updated name
    // { name: "Privacy Policy", path: "/privacy-policy" }, // Updated name
  ];

  return (
    <nav className="navbar bg-base-100 shadow-sm md:px-6 px-3 ">
      {/* Logo Section */}
      <div className="navbar-start">
        <Link to="/">
          <img className=" w-full h-14" src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition-colors font-medium ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-48 p-2 shadow"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition-colors font-medium ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
