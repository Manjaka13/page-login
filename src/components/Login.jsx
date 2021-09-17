/*
    Login primary component
*/

import React from "react";
import logo from "../images/logo-avenir-green.svg";
import illustration from "../images/illustration.png";
import togglePassword from "../images/togglePassword.png";

export default function Login() {
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
					<form className="form">
						<div className="inputbox">
							<input className="input" type="email" placeholder="E-MAIL" required />
							<p className="error error--active">Cet e-mail est invalide.</p>
						</div>
						<div className="inputbox">
							<input
								className="input"
								type="password"
								placeholder="MOT DE PASSE"
								required
							/>
							<p className="error error--active">Cet mot de passe est invalide.</p>
							<a className="toggle-password" href="#0">
								<img
									className="toggle-image"
									src={togglePassword}
									alt="Toggle password"
								/>
							</a>
						</div>
						<a className="forgot-password" href="#0">
							Oups, mot de passe oublié ?
						</a>
						<button className="button" type="submit">
							CONNEXION
						</button>
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
