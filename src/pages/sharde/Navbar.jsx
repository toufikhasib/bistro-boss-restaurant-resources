import { Link, NavLink } from "react-router-dom";
import useAuth from "../../coustomHooks/useAuth";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../coustomHooks/useCart";

const Navbar = () => {
	const [cart] = useCart();
	const navlink = (
		<>
			<NavLink
				to='/'
				className={({ isActive }) =>
					isActive ? "text-[#EEFF25] font-semibold " : ""
				}>
				Home
			</NavLink>
			<NavLink>CONTACT US</NavLink>
			<NavLink to='/dashboard'>DASHBOARD</NavLink>
			<NavLink to='/secret'>Secret</NavLink>
			<NavLink
				to='/ourmenu'
				className={({ isActive }) =>
					isActive ? "text-[#EEFF25] font-semibold " : ""
				}>
				OUR MENU
			</NavLink>

			<NavLink
				to='/order/salad'
				className={({ isActive }) =>
					isActive ? "text-[#EEFF25] font-semibold " : ""
				}>
				Order Menu
			</NavLink>
			<NavLink to='/dashboard/cart'>
				<button className='flex items-center gap-3'>
					<FaCartPlus size={20} />
					<div className='badge badge-secondary'>+{cart.length}</div>
				</button>
			</NavLink>
			<NavLink
				to='/login'
				className={({ isActive }) =>
					isActive ? "text-[#EEFF25] font-semibold " : ""
				}>
				Login
			</NavLink>
			<NavLink to='/register'>Register</NavLink>
		</>
	);
	const { user, logOut, setUser } = useAuth();
	const handleLogOut = () => {
		logOut()
			.then(() => {
				setUser(null);
				console.log("User logged out successfully");
			})
			.catch((error) => {
				console.log("Logout error:", error);
			});
	};
	return (
		<div className='navbar fixed z-50 bg-opacity-40 bg-black text-white max-w-screen-2xl mx-auto py-3'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2'>
						{navlink}
					</ul>
				</div>
				<div className=''>
					<h2>BISTRO BOSS</h2>
					<h2>Restaurant</h2>
				</div>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 gap-5'>{navlink}</ul>
			</div>
			<div className='navbar-end'>
				{user ? (
					<button onClick={handleLogOut} className='btn btn-neutral'>
						logOut
					</button>
				) : (
					<Link to='/login'>
						<button className='btn btn-neutral'>Login</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
