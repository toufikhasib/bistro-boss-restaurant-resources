import { Helmet } from "react-helmet-async";
import Cover from "../../sharde/cover/Cover";
import bgImg from "../../../assets/menu/banner3.jpg";
import dessertsImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import OurMenuCategory from "./ourMenuCategory";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../coustomHooks/useMenu";


const OurMenu = () => {
	const [menu] = useMenu();
	const offered = [...menu].filter((item) => item.category === "offered");
	const dessert = [...menu].filter((item) => item.category === "dessert");
	const pizza = [...menu].filter((item) => item.category === "pizza");
	const salad = [...menu].filter((item) => item.category === "salad");
	const soup = [...menu].filter((item) => item.category === "soup");
	// console.log(offered);
	return (
		<div>
			{/* helmet title */}
			<Helmet>
				<title>Bistro Boss | Our Menu</title>
			</Helmet>
			{/* cover banner img */}
			<div className='mb-10'>
				<Cover
					img={bgImg}
					title={"OUR MENU"}
					titleDescription={"Would you like to try a dish?"}></Cover>
			</div>
			{/* todays offer */}
			<SectionTitle
				subTitle={"---Don't miss---"}
				title={"TODAY'S OFFER"}></SectionTitle>
			<OurMenuCategory items={offered} ></OurMenuCategory>
			
			{/* DESSERTS section */}
			<div className='my-10'>
				<Cover
					img={dessertsImg}
					title={"DESSERTS"}
					titleDescription={
						"Desserts are sweet treats that make every meal special. From creamy rasmalai to fudgy brownies, they bring joy to every bite!"
					}></Cover>
			</div>
			<div className='md:pt-10'>
				<OurMenuCategory items={dessert} title={"dessert"}></OurMenuCategory>
			</div>
			
			{/* pizza section */}
			<div className='my-10'>
				<Cover
					img={pizzaImg}
					title={"PIZZA"}
					titleDescription={
						"Pizza is a delicious dish with a crispy crust, savory sauce, melted cheese, and endless topping options, perfect for any craving!"
					}></Cover>
			</div>
			<div className='md:pt-10'>
				<OurMenuCategory items={pizza} title={"pizza"}></OurMenuCategory>
			</div>
			
			{/* salad section */}
			<div className='my-10'>
				<Cover
					img={saladImg}
					title={"SALADS"}
					titleDescription={
						"Salads are fresh and healthy dishes made with a mix of veggies, fruits, and dressings, offering a perfect balance of taste and nutrition!"
					}></Cover>
			</div>
			<div className='md:pt-10'>
				<OurMenuCategory items={salad} title={"salad"}></OurMenuCategory>
			</div>
			
			{/* soups section */}
			<div className='my-10'>
				<Cover
					img={soupImg}
					title={"SOUPS"}
					titleDescription={
						"Soups are warm, comforting bowls of flavor, made with rich broths, veggies, and spices, perfect for any season!"
					}></Cover>
			</div>
			<div className='pt-10'>
				<OurMenuCategory items={soup} title={"soup"}></OurMenuCategory>
			</div>
			{/* <Button btn={"ORDER YOUR FAVOURITE FOOD"}></Button> */}
		</div>
	);
};

export default OurMenu;
