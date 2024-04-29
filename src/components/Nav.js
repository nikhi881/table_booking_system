import React from "react";
import "../static/styles/Nav.css";

function Nav() {
	return (
		<nav className="header-nav">
			<a href="/" className="nav-link">
				Home
			</a>
			<a href="/aboutus" className="nav-link">
				About
			</a>
			<a href="/menu" className="nav-link">
				Menu
			</a>
			<a href="/reservations" className="nav-link">
				Reservations
			</a>
			<a href="/orderonline" className="nav-link">
				Order Online
			</a>
			<a href="/login" className="nav-link login-link">
				Login
			</a>
		</nav>
	);
}

export default Nav;
