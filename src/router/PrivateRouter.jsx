import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../coustomHooks/useAuth";

const PrivateRouter = ({ children }) => {
	const { user, loading } = useAuth();

	console.log("private router", location);
	if (user) {
		return children;
	}
	if (loading) {
		return <progress className='progress w-56'></progress>;
	}
	return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
