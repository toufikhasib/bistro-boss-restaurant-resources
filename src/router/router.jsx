import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/home/Home";
import OurMenu from "../pages/menu/ourMenu/OurMenu";
import OrderFood from "../pages/order/orderFood/OrderFood";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRouter from "./PrivateRouter";
import Secret from "../pages/sharde/secret/Secret";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayouts></MainLayouts>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/ourmenu",
				element: <OurMenu></OurMenu>,
			},
			{
				path: "/order/:category",
				element: <OrderFood></OrderFood>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/secret",
				element: (
					<PrivateRouter>
						<Secret></Secret>
					</PrivateRouter>
				),
			},
		],
	},
]);

export default router;
