const OrderFoodCard = ({ orderCard }) => {
	console.log("order card", orderCard);
	const { name, image, recipe, price } = orderCard;
	return (
		<div>
			<div className='card card-compact bg-base-100  shadow-xl'>
				<img src={image} alt={name} />
                <p className="bg-black text-white absolute right-0 px-2 py-1 rounded-md mt-4 mr-4">${price}</p>
				<div className='card-body'>
					<h2 className='text-[#151515] text-2xl font-semibold text-center'>
						{name}
					</h2>
					<p>{recipe}</p>
					<div className='card-actions justify-center '>
						<button className='uppercase text-[#BB8506] btn btn-outline border-0 border-b-4'>
							add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderFoodCard;
