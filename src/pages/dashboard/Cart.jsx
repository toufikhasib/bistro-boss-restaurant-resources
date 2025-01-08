import { RiDeleteBinLine } from "react-icons/ri";
import useCart from "../../coustomHooks/useCart";

const Cart = () => {
	const [cart] = useCart();
	const totalPrice = cart.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.price;
	}, 0);
	console.log("cart item ", cart);
	const handelDelete = (id) => {
		console.log("delete id", id);
	};
	return (
		<div>
			<div className='flex flex-col items-center pt-12 w-full md:w-7/12 mx-auto px-10'>
				<h2 className='text-lg md:text-xl font-medium text-[#D99904]'>
					---My Cart---
				</h2>
				<div className='divider'></div>
				<h2 className='text-[#151515] text-2xl sm:text-4xl font-semibold'>
					WANNA ADD MORE?
				</h2>
				<div className='divider'></div>
			</div>
			<div className='flex justify-between items-center'>
				<h2 className='text-xl md:text-2xl text-black font-semibold'>
					Total Orders :{cart.length}
				</h2>
				<h2 className='text-xl md:text-2xl text-black font-semibold'>
					Total Price: $ {totalPrice}
				</h2>
				<button className='btn bg-[#D1A054]'>Pay</button>
			</div>
			{/* cart details */}
			<div className=''>
				<div className='overflow-x-auto'>
					<table className='table'>
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th>ITEM IMAGE</th>
								<th>ITEM NAME</th>
								<th>PRICE</th>
								<th>ACTION</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item, index) => (
								<tr key={item._id}>
									<th>{index + 1}</th>
									<td>
										<img className="w-20 h-20 rounded-lg" src={item.image} alt='cart image' />
									</td>
									<td>{item.name}</td>
									<td>{item.price}</td>
									<td>
										<RiDeleteBinLine
											onClick={() => handelDelete(item._id)}
											size={40}
											className='bg-red-700 text-white p-2 rounded-lg'></RiDeleteBinLine>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Cart;
