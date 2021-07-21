import React, { Component, useContext, useState, useEffect } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";
import "../../styles/list.scss";

export const PlanetsList = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets();
	}, []);

	return (
		<>
			{store.planets.map((planets, index) => {
				return (
					<div key={index} className="col-md-3">
						<Card
							img={"https://ryanacademy.ie/wp-content/uploads/2017/04/user-placeholder.png"}
							name={planets.name}
							heart={planets.fave}
							id={planets.uid}
							type={planets.type}
							url={planets.url}
						/>
					</div>
				);
			})}
		</>
	);
};
