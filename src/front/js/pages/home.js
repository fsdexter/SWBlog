import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PeopleList } from "../component/peopleList";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<h3 className="text-white text-left mb-4">Characters</h3>
				<div className="d-flex flex-row myScroll" style={{ height: "30rem" }}>
					<PeopleList />
				</div>
			</div>
			;
		</>
	);
};
