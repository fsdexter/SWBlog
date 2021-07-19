import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.scss";

export const Card = props => {
	const { store, actions } = useContext(Context);
	var id = props.id - 1;
	var type = props.type;
	var url = props.url;

	return (
		<>
			<div className="card " style={({ width: "14rem" }, { height: "17rem" })}>
				<img className="card-img-top" src={props.img} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.description}</p>
					<Link to="/details">
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								actions.showDetails(url);
							}}>
							More
						</button>
					</Link>
					{props.heart === false ? (
						<i className="far fa-heart text-danger" onClick={() => actions.changeHeart(id, true, type)} />
					) : (
						<i className="fa fa-heart text-danger" onClick={() => actions.changeHeart(id, false, type)} />
					)}
				</div>
			</div>
		</>
	);
};
