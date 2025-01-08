import { useForm } from "react-hook-form";
import useAuth from "../../coustomHooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const { createUser, setUser, updateUserProfile } = useAuth();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password)
			.then((result) => {
				const currentUser = result.user;
				setUser(currentUser);
				console.log(currentUser);
			})
			.catch((err) => {
				console.log(err.message);
			});
		updateUserProfile(data.name, data.photo)
			.then(() => {
				console.log("update your photo success");
			})
			.catch((error) => {
				console.log("update profile error", error);
			});
		reset();
		navigate("/");
	};
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Register</title>
			</Helmet>
			<div className='hero bg-base-200 min-h-screen'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl'>
						<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
							<h1 className='text-xl md:text-3xl font-bold text-center'>
								Register now!
							</h1>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									{...register("name", { required: true })}
									type='text'
									placeholder='Your Name'
									className='input input-bordered'
									required
								/>
								{/* errors will return when field validation fails  */}
								{errors.name && (
									<span className='text-red-700'>name is required</span>
								)}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									{...register("email", { required: true })}
									type='email'
									placeholder='email'
									className='input input-bordered'
									required
								/>
								{/* errors will return when field validation fails  */}
								{errors.email && (
									<span className='text-red-700'>email is required</span>
								)}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Photo</span>
								</label>
								<input
									{...register("photo", { required: true })}
									type='url'
									placeholder='Enter your photo'
									className='input input-bordered'
									required
								/>
								{/* errors will return when field validation fails  */}
								{errors.email && (
									<span className='text-red-700'>email is required</span>
								)}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									{...register("password", {
										required: true,
										minLength: 6,
										maxLength: 20,
										pattern:
											/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6}$/,
									})}
									type='password'
									placeholder='password'
									className='input input-bordered'
									required
								/>
								{/* errors will return when field validation fails  */}
								{errors.password?.type === "required" && (
									<span className='text-red-700'>password is required</span>
								)}
								{errors.password?.type === "minLength" && (
									<span className='text-red-700'>
										password must be 6 characters
									</span>
								)}
								{errors.password?.type === "maxLength" && (
									<span className='text-red-700'>
										password must be less then 6 characters
									</span>
								)}
								{errors.password?.type === "pattern" && (
									<span className='text-red-700'>
										Password must be 6 characters long and include an uppercase
										letter, a lowercase letter, a number, and a symbol.
									</span>
								)}
								<label className='label'>
									<a href='#' className='label-text-alt link link-hover'>
										Forgot password?
									</a>
								</label>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Register</button>
							</div>
							<p className='text-black font-semibold text-center pt-1'>
								Already registered?<Link to='/login'> Go to login</Link>
							</p>
						</form>
					</div>
					<div className='text-center lg:text-left'>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
