import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.scss";

export const Card = props => {
	return (
		<>
			<div className="card " style={({ width: "14rem" }, { height: "17rem" })}>
				<img className="card-img-top" src={props.img} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.description}</p>
					<a href="#" className="btn btn-primary">
						More
					</a>
				</div>
			</div>
		</>
	);
};
