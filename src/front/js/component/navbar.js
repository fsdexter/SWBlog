import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={logo} style={{ width: "8rem" }} />
			</Link>
			<div>
				<Dropdown title="Favorites" items={store.fave} />
			</div>
		</nav>
	);
};
