import DashboardTitle from "../../components/dashboardTitle/DashboardTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../coustomHooks/useAxiosSecure";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
const AllUsers = () => {
	const axiosSecure = useAxiosSecure();
	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get("/users");
			return res.data;
		},
	});
	// delete users
	const handelDelete = (id) => {
		// show modal delete request
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(async (result) => {
			try {
				if (result.isConfirmed) {
					// delete user
					const res = await axiosSecure.delete(`/users/${id}`);
					console.log("delete user", res);
					// delete confiron modal show success
					if (res.data) {
						Swal.fire({
							title: "Deleted!",
							text: "Your file has been deleted.",
							icon: "success",
						});
					}
				}
				// refetch user data
				refetch();
			} catch (error) {
				console.log(error);
			}
		});
	};
	// update user data
	const handleUpdateUser = async (user) => {
		try {
			await axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
				console.log(res.data);
				if (res.data.modifiedCount > 0) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: `${user.name} is an Admin Now`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
				// refetch user data
				refetch();
			});
		} catch (error) {
			console.log("update data error", error);
		}
	};
	return (
		<div>
			{/* dashboard title */}
			<DashboardTitle
				dashboardTitle={"---How many??---"}
				dashboardHeadingTitle={"MANAGE ALL USERS"}></DashboardTitle>
			{/* user data loading tanstack query*/}
			<h2 className='text-xl md:text-2xl text-black font-semibold'>
				TOTAl USERS : {users.length}
			</h2>
			<div className=''>
				<div className='overflow-x-auto rounded-t-xl mt-8'>
					<table className='table '>
						{/* head */}
						<thead className='bg-[#D1A054] '>
							<tr>
								<th></th>
								<th>NAME</th>
								<th>EMAIL</th>
								<th>ROLE</th>
								<th>ACTION</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={user._id}>
									<th>{index + 1}</th>

									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										{user.role === "admin" ? (
											"Admin"
										) : (
											<FaUsers
												onClick={() => handleUpdateUser(user)}
												className='text-white bg-[#D1A054]  p-2 rounded-lg'
												size={40}
											/>
										)}
									</td>
									<td>
										<RiDeleteBinLine
											onClick={() => handelDelete(user._id)}
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

export default AllUsers;
