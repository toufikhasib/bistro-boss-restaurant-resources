const Cover = ({ img, title, titleDescription }) => {
	return (
		<div
			className='hero h-[700px]'
			style={{
				backgroundImage: `url(${img})`,
			}}>
			<div className='hero-overlay bg-opacity-30'></div>
			<div className='hero-content text-neutral-content text-center bg-black bg-opacity-50'>
				<div className='max-w-lg px-28 py-10'>
					<h1 className='mb-5 text-3xl font-bold'>{title}</h1>
					<p className='mb-5'>{titleDescription}</p>
				</div>
			</div>
		</div>
	);
};

export default Cover;
