/*
    Login primary component
*/

import { useState, useRef } from "react";
import logo from "../images/logo-avenir-green.svg";
import illustration from "../images/illustration.png";
import togglePasswordImage from "../images/togglePassword.png";

export default function Login() {
	// Store error states
	const [errorEmail, setErrorEmail] = useState("");
	const [errorPassword, setErrorPassword] = useState("");

	//Reference the inputs
	const refEmail = useRef("");
	const refPassword = useRef("");

	// Regex for testing if email is valid
	const validateEmail = (str) => {
		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(str).toLowerCase());
	};

	// Tests the login form for any errors
	const testSubmit = () => {
		let valid = true;
		const email = refEmail.current.value;
		const password = refPassword.current.value;
		if (!validateEmail(email)) {
			setErrorEmail("L'adresse mail est invalide.");
			valid = false;
		}
		if (password.length < 3) {
			setErrorPassword("Le mot de passe est trop court.");
			valid = false;
		}
		return valid;
	};

	// Handles login form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (testSubmit()) {
			alert("Connexion... <>");
		}
	};

	// When input is focused
	const focusInput = (field) => {
		if (field === "email") setErrorEmail("");
		else if (field === "password") setErrorPassword("");
	};

	// Toggles password visibility
	const togglePassword = () => {
		const { type } = refPassword.current;
		refPassword.current.type = type === "password" ? "text" : "password";
	};

	return (
		<div className="login">
			{/* Top nav */}
			<div className="login__nav">
				<img className="logo" src={logo} alt="Logo Avenir Green" />
			</div>

			{/* Body */}
			<div className="login__body">
				{/* The beautiful illustration on the left */}
				<div className="login__illustration">
					<img
						className="image"
						src={illustration}
						alt="Illustration Avenir Green"
					/>
				</div>

				{/* The main form content */}
				<div className="login__content">
					<h1 className="title">Bienvenue dans votre espace client</h1>
					<p className="label">
						Proposé par <span className="name">Avenir Green</span>
					</p>

					{/* The form */}
					<form className="form" onSubmit={handleSubmit}>
						{/* Email */}
						<div className="inputbox">
							<input
								ref={refEmail}
								onFocus={() => focusInput("email")}
								className="input"
								type="email"
								placeholder="E-MAIL"
								required
							/>
							<p className="error">{errorEmail}</p>
						</div>

						{/* Password */}
						<div className="inputbox">
							<input
								ref={refPassword}
								onFocus={() => focusInput("password")}
								className="input"
								type="password"
								placeholder="MOT DE PASSE"
								required
							/>
							<p className="error">{errorPassword}</p>
							<a className="toggle-password" href="#0" onClick={togglePassword}>
								<img
									className="toggle-image"
									src={togglePasswordImage}
									alt="Toggle password"
								/>
							</a>
						</div>

						{/* Forgot password */}
						<a className="forgot-password" href="#0">
							Oups, mot de passe oublié ?
						</a>

						{/* Submit button */}
						<button className="button" type="submit">
							CONNEXION
						</button>

						{/* Found an issue */}
						<p className="issue">
							Vous rencontrez un problème ?{" "}
							<a className="contact" href="#0">
								Contactez-nous
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
