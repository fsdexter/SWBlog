import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/detalis.scss";
import Clone from "../../img/Clone.png";

export const Details = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container detalis">
				<div className="row">
					<div className="col img">
						<img className="imagem" src={Clone} />
					</div>
					<div className="col list">
						<ul>
							{store.properties.map((item, index) => (
								<li key={index}>
									{item[0]} : {item[1]}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
