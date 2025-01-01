import Banner from "./banner/Banner";
import BannerBg from "./banner/BannerBg";
import Category from "./category/Category";
import Featech from "./featech/Featech";
import PopularSection from "./popularSection/PopularSection";

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
			{/* featech section */}
			<Featech></Featech>
		</div>
	);
};

export default Home;
