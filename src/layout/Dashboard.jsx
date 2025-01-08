import { CiMenuBurger } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FcFeedback } from "react-icons/fc";
import { GoHomeFill } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className='flex flex-col md:flex-row'>
			{/* dashboard sidbar */}
			<div className='w-full md:w-64 bg-[#D1A054] min-h-screen '>
				<div className='pl-5 md:pl-8 space-y-5 pt-12'>
					{/* user home */}
					<div className='flex items-center space-x-2'>
						<GoHomeFill size={24} />
						<h2 className='text-black text-lg font-medium'>User Home</h2>
					</div>
					{/* reservation */}
					<div className='flex items-center space-x-2'>
						<FaCalendarAlt size={24} />
						<h2 className='text-black text-lg font-medium'>Reservation</h2>
					</div>
					{/* payment history */}
					<div className='flex items-center space-x-2'>
						<RiSecurePaymentFill size={24} />
						<h2 className='text-black text-lg font-medium'>Payment History</h2>
					</div>
					{/* my cart */}
					<NavLink to='/dashboard/cart' className='flex items-center space-x-2'>
						<FaCartShopping size={24} />
						<h2 className='text-black text-lg font-medium'>My Cart</h2>
					</NavLink>
					{/* add review */}
					<div className='flex items-center space-x-2'>
						<FcFeedback size={24} />
						<h2 className='text-black text-lg font-medium'>Add Review</h2>
					</div>
					{/* my booking */}
					<div className='flex items-center space-x-2'>
						<TbBrandBooking size={24} />
						<h2 className='text-black text-lg font-medium'>My Booking</h2>
					</div>
					{/* divider */}

					<div className='divider'></div>
					{/*  main layout router */}
					{/*  home */}
					<NavLink to='/' className='flex items-center space-x-2'>
						<GoHomeFill size={24} />
						<h2 className='text-black text-lg font-medium'>Home</h2>
					</NavLink>
					{/* menu */}
					<NavLink to='/order/salad' className='flex items-center space-x-2'>
						<CiMenuBurger size={24} />
						<h2 className='text-black text-lg font-medium'>Menu</h2>
					</NavLink>
					{/* Contact */}
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
