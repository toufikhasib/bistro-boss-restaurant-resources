const MenuItem = ({ item }) => {
	const { image, name, price, recipe } = item;
	console.log(item);
	return (
		<div className='flex space-x-5'>
			<img
				style={{ borderRadius: "0 200px 200px 200px" }}
				className='w-[120px] h-[105px]'
				src={image}
				alt={name}
			/>
			<div className=''>
				<h2 className='uppercase text-xl md:text-2xl text-black'>
					{name}-----------
				</h2>
				<p className='text-2xl md:text-base text-[#151515] pt-5'>{recipe}</p>
			</div>
			<p>{price}</p>
		</div>
	);
};

export default MenuItem;
