import Swal from "sweetalert2";
import useAuth from "../../../coustomHooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../coustomHooks/useAxiosSecure";
import useCart from "../../../coustomHooks/useCart";

const OrderFoodCard = ({ orderCard }) => {
	// console.log("order card", orderCard);
	const { name, image, recipe, price,_id } = orderCard;
	const { user } = useAuth();
	const navigate=useNavigate()
	const location=useLocation()
	const axiosSecure=useAxiosSecure()
	const [,refetch]=useCart()
	const handleAddToCard =async () => {
		if (user?.email) {
			// send to item card
			console.log("card item",  user.email);
			const cartItem={
				menuId:_id,
				email:user?.email,
				name,
				price,
				image

			}
			await axiosSecure.post("/cart",cartItem)
			.then(res=>{
				console.log(res.data)
				if(res.data.insertedId){
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: `${name} Your cart has been added`,
						showConfirmButton: false,
						timer: 1500
					  });
				}
				// refetch cart
				refetch()
			})
		} else {
			console.log("user not login");
			Swal.fire({
				title: "your are not login",
				text: "please  login to  add to the cart",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes,  please",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login",{state:{from:location}})
				}
			});
		}
	};
	return (
		<div>
			<div className='card card-compact bg-base-100  shadow-xl h-[505px]'>
				<img src={image} alt={name} />
				<p className='bg-black text-white absolute right-0 px-2 py-1 rounded-md mt-4 mr-4'>
					${price}
				</p>
				<div className='card-body'>
					<h2 className='text-[#151515] text-2xl font-semibold text-center'>
						{name}
					</h2>
					<p>{recipe}</p>
					<div className='card-actions justify-center '>
						<button
							onClick={handleAddToCard}
							className='uppercase text-[#BB8506] btn btn-outline border-0 border-b-4'>
							add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderFoodCard;
