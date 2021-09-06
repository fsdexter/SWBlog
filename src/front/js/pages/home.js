import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { PeopleList } from "../component/peopleList";

import { PlanetsList } from "../component/planetsList";
import { VehiclesList } from "../component/vehiclesList ";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<h1 className="text-white text-left mb-4">Characters</h1>
				<div className="d-flex flex-row myScroll">
					<PeopleList />
				</div>
			</div>
			<div className="container">
				<h1 className="text-white text-left mb-4">Planets</h1>
				<div className="d-flex flex-row myScroll">
					<PlanetsList />
				</div>
			</div>
			<div className="container">
				<h1 className="text-white text-left mb-4">Vehicles</h1>
				<div className="d-flex flex-row myScroll">
					<VehiclesList />
				</div>
			</div>
			;
		</>
	);
};
