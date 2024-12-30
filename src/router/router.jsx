import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayouts></MainLayouts>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
		],
	},
]);

export default router;
