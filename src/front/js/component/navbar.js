import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={logo} style={{ width: "8rem" }} />
			</Link>
			<div className="dropdown myDropdown">
				<button
					className="btn btn-outline-warning dropdown-toggle pl-5 pr-5"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favourites
				</button>
				<div className="dropdown-menu myFavourites" aria-labelledby="dropdownMenuButton">
					<ul className="text-warning">
						{store.fave && store.fave.length > 0 ? (
							store.fave.map(item => {
								return (
									<li
										key={item.url}
										className="dropdown-item text-warning d-flex justify-content-between align-items-center"
										id="myLiList">
										<h6>{item.name}</h6>
										<Link to="/details">
											<button
												type="button"
												className="btn btn-primary"
												onClick={() => {
													actions.showDetails(item.url);
												}}>
												More
											</button>
										</Link>
										<i
											className="fa fa-heart text-danger"
											onClick={() => actions.changeHeart(item.id, false, item.type)}
										/>
									</li>
								);
							})
						) : (
							<p className="pl-3">You do not have any favourite</p>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
