import React, { Component, useContext, useState, useEffect } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";
import "../../styles/list.scss";
import Errantes from "../../img/Errantes.png";

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
							img={Errantes}
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
