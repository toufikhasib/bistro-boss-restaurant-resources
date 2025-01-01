import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../sharde/menuItem/MenuItem";

const PopularSection = () => {
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		fetch("menu.json")
			.then((res) => res.json())
			.then((data) => {
				const popular = data.filter((item) => item.category === "popular");
				setMenu(popular);
			});
	}, []);
	// console.log(menu);

	return (
		<div>
			{/* title */}
			<SectionTitle
				subTitle={"---Check it out---"}
				title={"FROM OUR MENU"}></SectionTitle>
			{/* section card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                {menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
		</div>
	);
};

export default PopularSection;
