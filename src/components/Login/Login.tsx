import { useForm } from "react-hook-form";
import { useUserContext } from "../../context/userContext"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";

interface IForm {
	email: string;
	password: string;
}
// yup validation
export function LoginPage() {
	const {login} = useUserContext()
	const navigate = useNavigate()

	const { register, handleSubmit, formState, setError } = useForm<IForm>({
		mode: "onSubmit",
	});
	const onSubmit = async (data: IForm) => {
		const message = await login(data.email, data.password) 
		if (!message){
			navigate("/main")
		}
		else{
			if (message == "User not found"){
				setError("email", {type: "custom", message: message})
			}
			else if(message == "fix your password"){
				setError("password", {type: "custom", message: message})
			}
			
		}
	};
	return (
		<div className="login-container">
			<form onSubmit={handleSubmit(onSubmit)} className="login-form">

				{/* <div className="login-title-container"> */}
					<h1 className="login-title">Authorization</h1>
				{/* </div> */}


				<div className="login-inputs">
					<label className="login-label">
						Email:
						<input
							className="login-input"
							type="email"
							placeholder="Enter email..."
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
						<p className="login-error">{formState.errors.email?.message}</p>
					</label>
					<label className="login-label">
						Password:
						<input
							className="login-input"
							type="password"
							placeholder="Enter password..."
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
						<p className="login-error">{formState.errors.password?.message}</p>
					</label>
				</div>
				

				<div className="login-button-container">
					<button type="submit" className="login-button">Submit</button>
				</div>
				<div className="login-link-text">
						<Link to="/registration" className="login-reg-link">Go to registration</Link>
				</div>

			</form>
		</div>
	);
}