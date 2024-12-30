// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// banner img import
import img from "../../../assets/home/01.jpg";
import img1 from "../../../assets/home/02.jpg";
import img2 from "../../../assets/home/03.png";
import img3 from "../../../assets/home/04.jpg";
import img4 from "../../../assets/home/05.png";
import img5 from "../../../assets/home/06.png";
import img6 from "../../../assets/home/banner.jpg";

const Banner = () => {
	return (
		<div className='relative h-[400px]'>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'>
				<SwiperSlide>
					<img  src={img} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img1} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img2} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img3} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img4} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img5} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img6} alt='' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
