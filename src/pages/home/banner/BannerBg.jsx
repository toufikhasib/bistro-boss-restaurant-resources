const BannerBg = () => {
	return (
		<div className='my-20'>
			<div className='h-[572px] bg-bannerImg bg-cover bg-center flex items-center'>
				<div className='bg-white w-3/4 mx-auto flex flex-col justify-center items-center h-[300px] text-black text-center p-8 rounded '>
					<h2 className="text-2xl md:text-5xl text-black">Bistro Boss</h2>
					<p className="text-2xl md:text-base text-[#151515] pt-5">
						Bistro Boss is the ultimate destination for food lovers, where
						exceptional flavors meet a delightful dining experience. Our menu
						features a perfect fusion of classic and modern cuisines, crafted
						with fresh and high-quality ingredients. With a cozy ambiance and
						warm hospitality, we aim to make every meal memorable. At Bistro
						Boss, savor every bite and create moments to cherish.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BannerBg;
