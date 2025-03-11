import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div className="overflow-x-hidden overflow-y-auto">
            <Navbar/>
        <div className=" min-h-screen px-2">
            <Outlet/>
    </div>
            <Footer/>
        </div>
    );
};

export default Root;