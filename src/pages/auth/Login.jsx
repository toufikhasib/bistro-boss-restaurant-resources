import { useEffect, useState } from "react";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../coustomHooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/socialLogin/SocialLogin";

const Login = () => {
	const { singIn, setUser } = useAuth();
	
	const location = useLocation();

	// console.log("login location", location);

	const navigate = useNavigate();
	const fromLoaction = location.state?.from?.pathname || "/";

	const [disabled, setDisables] = useState(true);
	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);
	const handelLogin = (e) => {
		e.preventDefault();
		const from = e.target;
		const email = from.email.value;
		const password = from.password.value;
		singIn(email, password).then((result) => {
			const currentUser = result.user;
			setUser(currentUser);
			Swal.fire({
				title: "User login successfull",
				showClass: {
					popup: `
					animate__animated
					animate__fadeInDown
					animate__faster
				  `,
				},
				hideClass: {
					popup: `
					animate__animated
					animate__fadeOutDown
					animate__faster
				  `,
				},
			});
			
			// Reset the form fields properly
			from.reset();
			// Navigate to the previous route or default route
			navigate(fromLoaction, { replace: true });
		});
		// console.log(email, password);
	};

	const handelValidateCaptcha = (e) => {
		const user_captcha_value = e.target.value;
		if (validateCaptcha(user_captcha_value)) {
			setDisables(false);
		} else {
			setDisables(true);
		}
		console.log(user_captcha_value);
	};
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Login</title>
			</Helmet>
			<div className='hero bg-base-200 min-h-screen'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl'>
						<form onSubmit={handelLogin} className='card-body'>
							<h1 className='text-xl md:text-3xl font-bold text-center'>
								Login now!
							</h1>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									name='email'
									type='email'
									placeholder='email'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									name='password'
									type='password'
									placeholder='password'
									className='input input-bordered'
									required
								/>
								<label className='label'>
									<a href='#' className='label-text-alt link link-hover'>
										Forgot password?
									</a>
								</label>
							</div>
							<div className='form-control'>
								<label className='label'>
									<LoadCanvasTemplate />
								</label>
								<input
									onBlur={handelValidateCaptcha}
									name='captcha'
									type='text'
									placeholder='type the captcha above'
									className='input input-bordered'
									// required
								/>
							</div>

							<div className='form-control mt-6'>
								<input
									// todo: false
									disabled={false}
									type='submit'
									value='Login'
									className='btn btn-primary'
								/>
							</div>
							<p className='text-black font-semibold text-center pt-1'>
								New here?<Link to='/register'> Create a New Account</Link>
							</p>
							{/* social login */}
							<div className='divider'>Or sign in with</div>
							<SocialLogin></SocialLogin>
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

export default Login;
