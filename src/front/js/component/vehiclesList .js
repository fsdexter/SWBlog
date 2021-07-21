import React, { Component, useContext, useState, useEffect } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";
import "../../styles/list.scss";

export const VehiclesList = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getVehicles();
	}, []);

	var id = store.vehicles.uid;
	return (
		<>
			{store.vehicles.map((vehicles, index) => {
				return (
					<div key={index} className="col-md-3">
						<Card
							img={"https://ryanacademy.ie/wp-content/uploads/2017/04/user-placeholder.png"}
							name={vehicles.name}
							heart={vehicles.fave}
							id={index + 1}
							type={vehicles.type}
							url={vehicles.url}
						/>
					</div>
				);
			})}
		</>
	);
};
