import { Link } from "react-router-dom";
import Button from "../../sharde/button/Button";
import MenuItem from "../../sharde/menuItem/MenuItem";

const OurMenuCategory = ({ items,title }) => {
	return (
		<div className=''>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
				{items.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
			<div>
				<Link to={`/order/${title}`}>
					<Button btn={"ORDER YOUR FAVOURITE FOOD"}></Button>
				</Link>
			</div>
		</div>
	);
};

export default OurMenuCategory;
