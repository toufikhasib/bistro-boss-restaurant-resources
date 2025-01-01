import Banner from "./banner/Banner";
import BannerBg from "./banner/BannerBg";
import Category from "./category/Category";
import Featured from "./featured/Featured";

import PopularSection from "./popularSection/PopularSection";
import Testimial from "./testimonial/Testimial";

const Home = () => {
	return (
		<div>
			{/* banner section */}
			<Banner></Banner>
			{/* category section */}
			<Category></Category>
			{/* banner bg image */}
			<BannerBg></BannerBg>
			{/* popular section */}
			<PopularSection></PopularSection>
			{/* featured section */}
			<Featured></Featured>
			{/* testimonial section */}
			<Testimial></Testimial>
		</div>
	);
};

export default Home;
