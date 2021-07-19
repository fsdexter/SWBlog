import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Details = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col" />
					<div className="col">
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
