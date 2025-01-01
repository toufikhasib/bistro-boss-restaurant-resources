import SectionTitle from "../../../components/sectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
// import { use } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
const Testimial = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("reviews.json")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	console.log("reviews", reviews);
	return (
		<div>
			<SectionTitle
				subTitle={"---What Our Clients Say---"}
				title={"TESTIMONIALS"}></SectionTitle>
			<section></section>
			<div>
				<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
					{reviews.map((review) => (
						<SwiperSlide key={review._id}>
							<div className='mx-16 mb-16 flex flex-col items-center space-y-5'>
								<Rating
									style={{ maxWidth: 180 }}
									value={review.rating}
									readOnly
								/>
								<div className='py-2'>
									<FaQuoteLeft size={40}></FaQuoteLeft>
								</div>
								<p>{review.details}</p>
								<h2 className='text-xl md:text-2xl text-orange-500'>
									{review.name}
								</h2>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimial;
