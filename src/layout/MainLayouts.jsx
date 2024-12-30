import { Outlet } from "react-router-dom";
import Navbar from "../pages/sharde/Navbar";
import Footer from "../pages/sharde/Footer";


const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="min-h-[calc(100vh-332px)]">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;