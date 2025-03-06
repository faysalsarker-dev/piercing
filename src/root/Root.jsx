import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
            <Navbar/>
        <div className="max-w-6xl mx-auto min-h-screen">  <Outlet/></div>
            <Footer/>
        </div>
    );
};

export default Root;