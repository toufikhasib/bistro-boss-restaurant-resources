import Banner from "./banner/Banner";
import BannerBg from "./banner/BannerBg";
import Category from "./category/Category";

const Home = () => {
	return (
		<div>
			{/* banner section */}
			<Banner></Banner>
			{/* category section */}
			<Category></Category>
            {/* banner bg image */}
            <BannerBg></BannerBg>
		</div>
	);
};

export default Home;
