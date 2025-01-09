import { RiDeleteBinLine } from "react-icons/ri";
import useCart from "../../coustomHooks/useCart";
import useAxiosSecure from "../../coustomHooks/useAxiosSecure";
import Swal from "sweetalert2";
import DashboardTitle from "../../components/dashboardTitle/DashboardTitle";

const Cart = () => {
	const [cart, refetch] = useCart();
	const axiosSecure = useAxiosSecure();
	const totalPrice = cart.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.price;
	}, 0);
	// console.log("cart item ", cart);
	const handelDelete = async (id) => {
		try {
			// Show delete modal request
			const result = await Swal.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, delete it!",
			});

			// If user confirms deletion
			if (result.isConfirmed) {
				const res = await axiosSecure.delete(`/cart/${id}`);
				if (res.data.deletedCount > 0) {
					Swal.fire({
						title: "Deleted!",
						text: "Your cart has been deleted.",
						icon: "success",
					});
					// Refetch cart data after deletion
					refetch();
				}
			}
		} catch (error) {
			console.error("Error deleting cart item:", error);
			Swal.fire({
				title: "Error!",
				text: "Something went wrong. Please try again.",
				icon: "error",
			});
		}
	};
	return (
		<div>
			{/* dashboard title */}
			<DashboardTitle
				dashboardTitle={"---My Cart---"}
				dashboardHeadingTitle={"WANNA ADD MORE?"}></DashboardTitle>
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
				<div className='overflow-x-auto rounded-t-xl mt-8'>
					<table className='table '>
						{/* head */}
						<thead className='bg-[#D1A054] '>
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
										<img
											className='w-20 h-20 rounded-lg'
											src={item.image}
											alt='cart image'
										/>
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
