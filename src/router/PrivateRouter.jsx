import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../coustomHooks/useAuth";

const PrivateRouter = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation()
	// console.log("private router", location);
	if (user) {
		return children;
	}
	if (loading) {
		return <progress className='progress w-56'></progress>;
	}
	return <Navigate to='/login' replace state={{ from: location }} ></Navigate>;
};

export default PrivateRouter;
