import { createBrowserRouter } from "react-router";

import Root from "../root/Root";
import Home from "../pages/home/Home";
import ServicePost from "../pages/servicePage/ServicePost";
import ServicesPage from "../pages/services/ServicesPage";
import OnlineBooking from "../pages/onlineBooking/OnlineBooking";




const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    ErrorBoundary: () => <h3>Error Page</h3>,
    children: [ 
      {
        index: true,  
        element:<Home/>
      },
      {
        path: 'services/:id',  
        element:<ServicePost/>
      },
      {
        path: 'all-services',  
        element:<ServicesPage/>
      },
      {
        path:'online-booking',
        element:<OnlineBooking/>
      }
   
    ]
  },
]);


export default router;