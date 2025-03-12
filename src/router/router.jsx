import { createBrowserRouter } from "react-router";

import Root from "../root/Root";
import Home from "../pages/home/Home";

import OnlineBooking from "../pages/onlineBooking/OnlineBooking";
import AboutUs from "../pages/about/AboutUs";
import ContactUs from '../pages/contactus/ContactUs';
import ErrorPage from "../pages/error/ErrorPage";




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
]);


export default router;