const SectionTitle = ({subTitle,title}) => {
	return (
		<div className=' text-center w-full sm:w-5/12 md:w-4/12 mx-auto my-10'>
			<p className='text-[#D99904] font-medium text-xl'>
			{subTitle}	
			</p>
			<div className='divider'></div>
			<h2 className='text-4xl text-[#151515] font-semibold'>{title}</h2>
			<div className='divider'></div>
		</div>
	);
};

export default SectionTitle;
