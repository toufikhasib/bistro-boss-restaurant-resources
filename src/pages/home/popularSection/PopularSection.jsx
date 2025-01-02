import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../coustomHooks/useMenu";
import MenuItem from "../../sharde/menuItem/MenuItem";

const PopularSection = () => {
	const [menu] = useMenu();
	const popular = [...menu].filter((item) => item.category === "popular");
	// console.log(popular);
	return (
		<div>
			{/* title */}
			<SectionTitle
				subTitle={"---Check it out---"}
				title={"FROM OUR MENU"}></SectionTitle>
			{/* section card */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
				{popular.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
		</div>
	);
};

export default PopularSection;
