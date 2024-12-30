import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// banner img import
import img from "../../../assets/home/slide1.jpg";
import img1 from "../../../assets/home/slide2.jpg";
import img2 from "../../../assets/home/slide3.jpg";
import img3 from "../../../assets/home/slide4.jpg";
import img4 from "../../../assets/home/slide5.jpg";

const Category = () => {
	return (
		<div>
			<div className=' text-center w-full sm:w-5/12 md:w-4/12 mx-auto'>
				<h3 className="text-[#D99904] font-medium text-xl">---From 11:00am to 10:00pm---</h3>
                <div className="divider"></div>
				<h2 className="text-4xl text-[#151515] font-semibold">ORDER ONLINE</h2>
                <div className="divider"></div>
			</div>
			{/* swiper slider */}
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 3000, // Auto slide interval (in milliseconds)
					disableOnInteraction: false, // Keep autoplay running even after user interaction
				}}
				modules={[Pagination, Autoplay]}
				className='mySwiper'>
				<SwiperSlide>
					<img
						className='w-full h-[400px] object-cover'
						src={img}
						alt='slider-1'
					/>
					<h2 className='text-3xl text-center font-semibold -mt-16 uppercase'>
						salads
					</h2>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='w-full h-[400px] object-cover'
						src={img1}
						alt='slider-2'
					/>
					<h2 className='text-3xl text-center font-semibold -mt-16 uppercase'>
						soups
					</h2>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='w-full h-[400px] object-cover'
						src={img2}
						alt='slider-3'
					/>
					<h2 className='text-3xl text-center font-semibold -mt-16 uppercase'>
						pizzas
					</h2>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='w-full h-[400px] object-cover'
						src={img3}
						alt='slider-4'
					/>
					<h2 className='text-3xl text-center font-semibold -mt-16 uppercase'>
						desserts
					</h2>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='w-full h-[400px] object-cover'
						src={img4}
						alt='slider-5'
					/>
					<h2 className='text-3xl text-center font-semibold -mt-16 uppercase'>
						salads
					</h2>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Category;
