import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/home/Home";
import OurMenu from "../pages/menu/ourMenu/OurMenu";
import OrderFood from "../pages/order/orderFood/OrderFood";

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
				path:"/ourmenu",
				element:<OurMenu></OurMenu>
			},
			{
				path:'/order/:category',
				element:<OrderFood></OrderFood>
			}
		],
	},
]);

export default router;
