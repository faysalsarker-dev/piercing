import { createBrowserRouter } from "react-router";

import Root from "../root/Root";
import Home from "../pages/home/Home";

import OnlineBooking from "../pages/onlineBooking/OnlineBooking";
import AboutUs from "../pages/about/AboutUs";
import ContactUs from '../pages/contactus/ContactUs';
import ErrorPage from "../pages/error/ErrorPage";
import Dashboard from "../root/Dashboard";
import Overview from "../admin/Overview";
import Login from "../admin/Login";
import Post from "../admin/Post";
import PostEdit from "../admin/components/PostEdit";
import AllBookings from "../admin/AllBookings";
import ClientReview from './../admin/ClientReview';
import PasswordReset from "../admin/PasswordReset";
import Protector from './Protector';
import AfterCare from "../pages/afterCare/AfterCare";
import PiercingPriceList from "../pages/piercing/PiercingPriceList";
import EarPiercingList from "../pages/piercing/EarPiercingList";
import PriceListPage from "../admin/PriceManagemant";
import SilverSmycke from "../pages/piercing/Silversmycke";
import AdminBookingPage from './../admin/AdminBookingPage';
import MyBookings from "../pages/myBookings/MyBookings";
import Blogs from "../pages/blog/Blogs";
import BlogPage from "../pages/blog/blog/BlogPage";




const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    ErrorBoundary: () => <ErrorPage/>,
    children: [ 
      {
        index: true,  
        element:<Home/>
      },
      {
        path:'online-booking',
        element:<OnlineBooking/>
      },
      {
        path:'aboutus',
        element:<AboutUs/>
      },
      {
        path:'contactus',
        element:<ContactUs/>
      },
      {
        path:'after-care',
        element:<AfterCare/>
      },
      {
        path:'piercing',
        element:<PiercingPriceList/>
      },
      {
        path:'oronhåltagning',
        element:<EarPiercingList/>
      },
      {
        path:'after-care',
        element:<AfterCare/>
      },
      {
        path:'silver-smycke',
        element:<SilverSmycke/>
      },
      {
        path:'my-bookings',
        element:<MyBookings/>
      },
      {
        path:'blog',
        element:<Blogs/>
      },
     {
        path:'/blog/:slug', 
        element: <BlogPage />,
      },
    ]
  },
  {
    path: "/admin",
    element:<Protector> <Dashboard /></Protector>,
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true, 
        element: <Overview />,
      },
      {
        path:'all-posts', 
        element: <Post />,
      },
      {
        path:'all-posts/:id', 
        element: <PostEdit />,
      },
      {
        path:'all-price', 
        element: <PriceListPage />,
      },
      {
        path:'all-bookings', 
        element: <AllBookings />,
      },
      {
        path:'add-bookings', 
        element: <AdminBookingPage />,
      },
      {
        path:'review', 
        element: <ClientReview />,
      },
      
    ],
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/reset-password',
    element:<PasswordReset/>
  }
]);


export default router;