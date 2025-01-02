import Cover from "../../sharde/cover/Cover";
import orderFoodImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../coustomHooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderCategory from "./OrderCategory";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OrderFood = () => {
	const [menu] = useMenu();
	const salad = [...menu].filter((item) => item.category === "salad");
	const pizza = [...menu].filter((item) => item.category === "pizza");
	const soup = [...menu].filter((item) => item.category === "soup");
	const dessert = [...menu].filter((item) => item.category === "dessert");
	const drinks = [...menu].filter((item) => item.category === "drinks");
	//
	const { category } = useParams();
	const categoris = ["salad", "pizza", "soup", "dessert", "drinks"];
	const initialIndex = categoris.indexOf(category);
	const [tabIndex, setTabIndex] = useState(initialIndex);
	console.log(category);

	return (
		<div>
			{/* banner img */}
			<div>
				<Cover
					img={orderFoodImg}
					title={"OUR SHOP"}
					titleDescription={"Would you like to try a dish?"}></Cover>
			</div>
			{/* tap list */}
			<div className='my-10 flex justify-center'>
				<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
					<TabList>
						<Tab>SALAD</Tab>
						<Tab>PIZZA</Tab>
						<Tab>SOUP</Tab>
						<Tab>DESSERT</Tab>
						<Tab>DRINKS</Tab>
					</TabList>

					<TabPanel>
						<OrderCategory items={salad}></OrderCategory>
					</TabPanel>
					<TabPanel>
						<OrderCategory items={pizza}></OrderCategory>
					</TabPanel>
					<TabPanel>
						<OrderCategory items={soup}></OrderCategory>
					</TabPanel>
					<TabPanel>
						<OrderCategory items={dessert}></OrderCategory>
					</TabPanel>
					<TabPanel>
						<OrderCategory items={drinks}></OrderCategory>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default OrderFood;
