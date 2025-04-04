import React, { useContext } from "react";
import { Link, Outlet } from "react-router"; // ✅ Fix import
import ScrollToTop from "../utility/ScrollToTop";
import  { useState } from "react";
import { NavLink } from "react-router";
import { FaHome,  FaSignOutAlt, FaBars, FaComment } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";
import { ContextData } from "../utility/ContextData";
import Swal from "sweetalert2";


const Dashboard = () => {
 const { user ,logOut}= useContext(ContextData);
    const [isOpen, setIsOpen] = useState(false);

    const closeDrawer = () => {
      setIsOpen(false);
      document.getElementById("my-drawer").checked = false;
    };


    const NavItams=[
      {
        path:'',
        icon:<FaHome/>,
        title:'Dashboard'
      },
      {
        path:'all-price',
        icon:<BsFileEarmarkPost />,
        title:'All item'
      },
      {
        path:'all-bookings',
        icon:<TbBrandBooking />,
        title:'Booking'
      },
      {
        path:'review',
        icon:<FaComment />,
        title:'Clients Review'
      },
    ]

    const handleLogout = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, Logout!"
      }).then((result) => {
        if (result.isConfirmed) {
          logOut()
            .then(() => {
              Swal.fire("Logged Out", "You have been successfully logged out!", "success");
            })
            .catch((error) => {
              Swal.fire("Error", error.message, "error");
            });
        }
      });
    };
    




  return (
  
<div className="max-w-7xlxl mx-auto overflow-x-hidden overflow-y-auto roboto">
    
    <div className="drawer lg:drawer-open">
    <ScrollToTop />
    <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="navbar card-color shadow-md px-4 flex justify-between items-center">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button lg:hidden">
          <FaBars size={24} className="-ml-3" />
        </label>
        <h2 className="text-xl font-bold text-blue-600 ch">Admin Dashboard</h2>
        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold">{user?.email}</p>
            <p className="text-xs ">Admin</p>
          </div>
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content card-color rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to='/reset-password'>Password Reset</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>
  
        </div>
      </div>
    
      {/* Main content */}
      <div style={{ maxHeight: 'calc(100vh - 60px)' }} className="p-3 overflow-x-hidden overflow-y-scroll" ><Outlet/></div>
    </div>
    
    {/* Sidebar */}
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu card-color  min-h-full w-80 p-4 shadow-lg space-y-1">
        {/* Website Name / Logo */}
        <li className="mb-4 text-lg font-bold text-start text-blue-600 ch">
          🔹 Admin Panel
        </li>
    

{
  NavItams.map((item,index)=>{  
    return(
      <li key={index}>
      <NavLink
        end 
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
            onClick={handleLogout}
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







