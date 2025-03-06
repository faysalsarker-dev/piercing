/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import { ContextData } from "../utility/ContextData";
import { useContext } from "react";


const Protector = ({ children }) => {
  const { loading,user } = useContext(ContextData);

  
  if (loading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }

  
  if (!user) {
    return <Navigate to="/login"  />;
  }

 
  return <>{children}</>;
};

export default Protector;