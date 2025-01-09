import { FaGoogle } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../coustomHooks/useAuth";
import useAxiosPublice from "../../coustomHooks/useAxiosPublice";
import Swal from "sweetalert2";

const SocialLogin = () => {
	const axiosPublice = useAxiosPublice();
	const location = useLocation();
	// console.log("google location", location);
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";
	const { googleLogin, setUser } = useAuth();
	const handleGoogleLogin = async () => {
		try {
			// googlr login
			const result = await googleLogin();
			const currentUser = result.user;
			setUser(currentUser);
			// login success modal
			Swal.fire({
				position: "top-center",
				icon: "success",
				title: "Your login has been success",
				showConfirmButton: false,
				timer: 1500,
			});
			console.log("goole login user", currentUser);
			// user information data
			const userInfo = {
				name: currentUser.displayName,
				email: currentUser.email,
			};
			// send user information data
			const res = await axiosPublice.post("/users", userInfo);
			console.log("user data", res.data);
			// navigate to the router
			navigate(from, { replace: true });
		} catch (error) {
			console.log("google login error", error);
		}
	};
	return (
		<div className='flex flex-col items-center '>
			<button
				onClick={handleGoogleLogin}
				className='btn btn-neutral w-5/12 mx-auto'>
				<FaGoogle size={20}></FaGoogle>
				Google
			</button>
			<div className='divider'>Or Back to Home Page</div>
			<Link to='/' className='btn btn-neutral w-5/12 mx-auto'>
				<MdHomeFilled size={20}></MdHomeFilled>
				Home
			</Link>
		</div>
	);
};

export default SocialLogin;
