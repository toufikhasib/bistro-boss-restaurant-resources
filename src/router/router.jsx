import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/home/Home";
import OurMenu from "../pages/menu/ourMenu/OurMenu";

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
			}
		],
	},
]);

export default router;
