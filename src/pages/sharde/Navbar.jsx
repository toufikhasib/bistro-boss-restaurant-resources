import { NavLink } from "react-router-dom";

const Navbar = () => {
	const navlink = (
		<>
			<NavLink to='/'>Home</NavLink>
			<NavLink>CONTACT US</NavLink>
			<NavLink>DASHBOARD</NavLink>
			<NavLink>OUR MENU</NavLink>
			<NavLink>OUR SHOP</NavLink>
		</>
	);
	return (
		<div className='navbar fixed z-50 bg-opacity-50 bg-black text-white max-w-screen-2xl mx-auto'>
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
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2'>
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
				<a className='btn'>Button</a>
			</div>
		</div>
	);
};

export default Navbar;
