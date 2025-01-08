import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/sharde/Navbar";
import Footer from "../pages/sharde/Footer";

const MainLayouts = () => {
	const location = useLocation();
	// console.log(location);
	const noHeaderFooter = location.pathname.includes("/login") ||location.pathname.includes("/register")
	return (
		<div>
			{noHeaderFooter || <Navbar></Navbar>}
			<div className='min-h-[calc(100vh-332px)]'>
				<Outlet></Outlet>
			</div>
			{noHeaderFooter || <Footer></Footer>}
		</div>
	);
};

export default MainLayouts;
