import { CiMenuBurger } from "react-icons/ci";
import { FaBook, FaCalendarAlt,  FaUtensils } from "react-icons/fa";
import { FaBagShopping, FaCartShopping, FaUsers } from "react-icons/fa6";
import { FcFeedback } from "react-icons/fc";
import { GoHomeFill } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../coustomHooks/useCart";

const Dashboard = () => {
	const [cart] = useCart();
	const isAdmin = true;
	return (
		<div className='flex flex-col md:flex-row'>
			{/* dashboard sidbar */}
			<div className='w-full md:w-64 bg-[#D1A054] min-h-screen '>
				{/* title */}
				<div className='pl-5 md:pl-8 space-y-2 pt-12'>
					<h2 className='text-xl text-black font-semibold'>BISTRO BOSS</h2>
					<p className='text-lg text-black font-medium'>Restaurant</p>
				</div>
				<div className='pl-5 md:pl-8 space-y-5 pt-12'>
					{/* shared navlink */}
					{isAdmin ? (
						<>
							<NavLink className='flex items-center space-x-2'>
								<GoHomeFill size={24} />
								<h2 className='text-black text-lg font-medium'>Admin Home</h2>
							</NavLink>
							<NavLink className='flex items-center space-x-2'>
								<FaUtensils size={24} />
								<h2 className='text-black text-lg font-medium'>Add Items</h2>
							</NavLink>
							<NavLink className='flex items-center space-x-2'>
								<CiMenuBurger size={24} />
								<h2 className='text-black text-lg font-medium'>Manage Items</h2>
							</NavLink>
							<NavLink className='flex items-center space-x-2'>
								<FaBook size={24} />
								<h2 className='text-black text-lg font-medium'>Manage Bookings</h2>
							</NavLink>
							<NavLink
								to='/dashboard/allUser'
								className={({ isActive }) =>
									`flex items-center space-x-2 ${
										isActive ? "text-white" : "text-black"
									}`
								}>
								<FaUsers size={24} />
								<h2 className='text-lg font-medium'>All Users </h2>
							</NavLink>
							
						</>
					) : (
						<>
							<NavLink className='flex items-center space-x-2'>
								<GoHomeFill size={24} />
								<h2 className='text-black text-lg font-medium'>User Home</h2>
							</NavLink>
							<NavLink className='flex items-center space-x-2'>
								<FaCalendarAlt size={24} />
								<h2 className='text-black text-lg font-medium'>Reservation</h2>
							</NavLink>
							<NavLink className='flex items-center space-x-2'>
								<RiSecurePaymentFill size={24} />
								<h2 className='text-black text-lg font-medium'>
									Payment History
								</h2>
							</NavLink>
							<NavLink
								to='/dashboard/cart'
								className={({ isActive }) =>
									`flex items-center space-x-2 ${
										isActive ? "text-white" : "text-black"
									}`
								}>
								<FaCartShopping size={24} />
								<h2 className='text-lg font-medium'>My Cart ({cart.length})</h2>
							</NavLink>
							<NavLink className='flex items-center space-x-2'>
								<FcFeedback size={24} />
								<h2 className='text-black text-lg font-medium'>Add Review</h2>
							</NavLink>
							<NavLink className='flex items-center space-x-2'>
								<TbBrandBooking size={24} />
								<h2 className='text-black text-lg font-medium'>My Booking</h2>
							</NavLink>
						</>
					)}
					{/* divider */}
					<div className='divider'></div>
					{/*  main layout router */}
					<NavLink to='/' className='flex items-center space-x-2'>
						<GoHomeFill size={24} />
						<h2 className='text-black text-lg font-medium'>Home</h2>
					</NavLink>
					<NavLink to='/order/salad' className='flex items-center space-x-2'>
						<CiMenuBurger size={24} />
						<h2 className='text-black text-lg font-medium'>Menu</h2>
					</NavLink>
					<NavLink className='flex items-center space-x-2'>
						<FaBagShopping size={24} />
						<h2 className='text-black text-lg font-medium'>Shop</h2>
					</NavLink>
					<NavLink className='flex items-center space-x-2'>
						<GrContact size={24} />
						<h2 className='text-black text-lg font-medium'>Contact</h2>
					</NavLink>
				</div>
			</div>
			{/* dashboard navigation bar */}
			<div className='flex-1 px-12'>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
