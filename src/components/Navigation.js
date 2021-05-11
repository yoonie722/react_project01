import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

function Navigation() {
	return (
		<div className="nav_con">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
		</div>
	)
}

export default Navigation;