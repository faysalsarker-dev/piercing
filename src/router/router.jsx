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
   
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
      
    ],
  },
  {
    path:'/login',
    element:<Login/>
  }
]);


export default router;