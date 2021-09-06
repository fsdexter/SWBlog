import React, { Component, useContext, useState, useEffect } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";
import "../../styles/list.scss";
import ships from "../../img/ships.png";

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
							img={ships}
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
