const DashboardTitle = ({ dashboardTitle, dashboardHeadingTitle }) => {
	return (
		<div className='flex flex-col items-center pt-12 w-full md:w-7/12 mx-auto px-10'>
			<h2 className='text-lg md:text-xl font-medium text-[#D99904]'>
				{dashboardTitle}
			</h2>
			<div className='divider'></div>
			<h2 className='text-[#151515] text-2xl sm:text-4xl font-semibold'>
				{dashboardHeadingTitle}
			</h2>
			<div className='divider'></div>
		</div>
	);
};

export default DashboardTitle;
