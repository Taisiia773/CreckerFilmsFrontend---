import { useForm } from "react-hook-form";
import { useUserContext } from "../../context/userContext"
import "./Registration.css"
import { Link } from "react-router-dom";

interface IForm {
    username:string;
	email: string;
	password: string;
    image:string;
	age:string;
}

export function RegisterPage() {
	const {register: userRegister} = useUserContext()

	const { register, handleSubmit, formState } = useForm<IForm>({
		mode: "onSubmit",
	});
	const onSubmit = async (data: IForm) => {
		console.log("Отправка формы:", data);
		userRegister(data.username, data.email, data.password, data.image, data.age)
	};
	return (
		<div className="registration-container">
			<div className="registration-div">
				<form onSubmit={handleSubmit(onSubmit)} noValidate className="registration-form">
					<h1>Registration</h1>

					<div className="inputs">
						<label className="register-label">
							Username:
							<input
								className="login-input"
								type="username"
								{...register("username", {
									required: {
										value: true,
										message: "Field is required",
									},
									minLength: {
										value: 7,
										message: "Length should be > 7",
									},
									maxLength: {
										value: 50,
										message: "Length should be < 50",
									},
								})}
							/>
							<p className="error-message">{formState.errors.username?.message}</p>
						</label>
						
						<label className="register-label">
							Email:
							<input
								className="login-input"
								type="email"
								{...register("email", {
									required: {
										value: true,
										message: "Field is required",
									},
									minLength: {
										value: 7,
										message: "Length should be > 7",
									},
									maxLength: {
										value: 50,
										message: "Length should be < 50",
									},
								})}
							/>
							<p className="error-message">{formState.errors.email?.message}</p>
						</label>
						<label className="register-label">
							Password:
							<input
								className="login-input"
								type="password"
								{...register("password", {
									required: {
										value: true,
										message: "Field is required",
									},
									minLength: {
										value: 7,
										message: "Length should be > 7",
									},
									maxLength: {
										value: 50,
										message: "Length should be < 50",
									},
								})}
							/>
							<p className="error-message">{formState.errors.password?.message}</p>
						</label>
						<label className="register-label">
							Image:
							<input
								className="login-input"
								type="url"
								{...register("image", {
									required: {
										value: true,
										message: "Field is required",
									},
									minLength: {
										value: 7,
										message: "Length should be > 7",
									}
								})}
							/>
							<p className="error-message">{formState.errors.image?.message}</p>
						</label>
						<label className="register-label">
							Age:
							<input
								className="login-input"
								type="text"
								{...register("age", {
									required: {
										value: true,
										message: "Field is required",
									}
								})}
							/>
							<p className="error-message">{formState.errors.image?.message}</p>
						</label>
					</div>

					<div className="login-button-container">
						<button type="submit" className="login-button">Submit</button>
					</div>
					<div>
						<Link to="/login" className="log-reg-link">Go to login</Link>
					</div>
				</form>
			</div>
		</div>
	);
}