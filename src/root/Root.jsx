import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../utility/ScrollToTop";


const Root = () => {
    return (
        <div className="overflow-x-hidden overflow-y-auto ">
            <Navbar/>
            <ScrollToTop/>
        <div className=" min-h-screen ">
            <Outlet/>
    </div>
            <Footer/>
        </div>
    );
};

export default Root;