
import featchImg from "../../../assets/home/featured.jpg";
import "../featured/featured.css";
const Featured = () => {
	return (
		<div className='featured-item bg-fixed my-16'>
			<div className='  bg-black bg-opacity-50 text-white'>
				<div className=' text-center w-full sm:w-5/12 md:w-4/12 mx-auto pt-10'>
					<p className='text-[#D99904] font-medium text-xl'>---Check it out---</p>
					<div className='border-b-2 my-5'></div>
					<h2 className='text-4xl text-white font-semibold'>FROM OUR MENU</h2>
					<div className='border-b-2 pt-5'></div>
				</div>
				
				<div className='md:flex items-center gap-8 py-20 px-28'>
					<img className='w-4/12' src={featchImg} alt='featch img' />
					<div className='space-y-5'>
						<p>March 20, 2023</p>
						<h2 className='text-2xl'>WHERE CAN I GET SOME?</h2>
						<p>
							Discover the finest appetizers, prepared with fresh ingredients
							and crafted by our expert chefs. Perfect for any occasion, our
							menu offers a variety of delicious options to satisfy your
							cravings. Visit us today and experience flavors like never before!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
