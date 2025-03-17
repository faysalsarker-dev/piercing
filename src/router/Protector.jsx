import { Navigate, useLocation } from "react-router";




import Loading from "../components/loading/Loading";
import { ContextData } from "../utility/ContextData";
import { useContext } from "react";

const Protector = ({ children }) => {
 const { user ,loading}= useContext(ContextData);
  const location = useLocation();

 
  if (loading) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
<Loading/>
      </div>
    );
  }

  // Redirect to the login page if the user is not authenticated
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render children if user is authenticated
  return <>{children}</>;
};


export default Protector;

