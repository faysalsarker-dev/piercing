import React from "react";
import { Link, NavLink } from "react-router"; // Fixed import
import Logo from "/logo.png";

const Navbar = () => {
  const navItems = [
    { name: "Hem", path: "/" },
    { name: "Piercing Öronhåltagning", path: "/Piercing-Oronhåltagning" },
    { name: "After Care", path: "/after-care" },
    { name: "Silversmycken", path: "/Silversmycken" },
    { name: "Boka online", path: "/online-booking" },
    { name: "Kontakta oss", path: "/contactus" },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-sm md:px-6 px-3 flex justify-between items-center">
      {/* Logo Section - Reduced width */}
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
                    `block px-4 py-2 text-xl rounded-md transition-colors font-medium ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary dark:text-white"
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
