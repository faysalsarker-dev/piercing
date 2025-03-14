import React from "react";
import { Link, Outlet } from "react-router"; // ✅ Fix import
import ScrollToTop from "../utility/ScrollToTop";
import  { useState } from "react";
import { NavLink } from "react-router";
import { FaHome,  FaSignOutAlt, FaBars } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";


const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const closeDrawer = () => {
      setIsOpen(false);
      document.getElementById("my-drawer").checked = false;
    };


    const NavItams=[
      {
        path:'/dashboard',
        icon:<FaHome/>,
        title:'Dashboard'
      },
      {
        path:'/posts',
        icon:<BsFileEarmarkPost />,
        title:'All Posts'
      },
      {
        path:'/Booking',
        icon:<TbBrandBooking />,
        title:'Booking'
      },
    ]
  return (
  
<div className="max-w-7xlxl mx-auto overflow-x-hidden overflow-y-auto">
    
    <div className="drawer lg:drawer-open">
    <ScrollToTop />
    <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md px-4 flex justify-between items-center">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button lg:hidden">
          <FaBars size={24} className="-ml-3" />
        </label>
        <h2 className="text-xl font-bold text-primary">Admin Dashboard</h2>
        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
   
        <li><Link to='/login'>Login</Link></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  
        </div>
      </div>
    
      {/* Main content */}
      <div className="p-6"><Outlet/></div>
    </div>
    
    {/* Sidebar */}
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 shadow-lg">
        {/* Website Name / Logo */}
        <li className="mb-4 text-lg font-bold text-start text-primary">
          🔹 Admin Panel
        </li>
    

{
  NavItams.map((item,index)=>{  
    return(
      <li key={index}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex items-center gap-2 p-2 rounded-lg ${isActive ? "bg-primary text-white" : "hover:bg-base-300"}`
        }
        onClick={closeDrawer}
      >
        {item.icon} {item.title}
      </NavLink>
    </li>
    )
  }

  ) 
}

   
        <li className="mt-auto">
          <a
            className="flex items-center gap-2 text-red-500 hover:bg-red-200 p-2 rounded-lg"
            onClick={closeDrawer}
          >
            <FaSignOutAlt /> Logout
          </a>
        </li>
      </ul>
    </div>
    </div>
    
    
</div>





  );
};

export default Dashboard;







