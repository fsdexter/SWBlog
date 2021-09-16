import React, { Component, useContext, useState, useEffect } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

import Character from "../../img/Character.png";

export const PeopleList = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPeople();
	}, []);

	return (
		<>
			{store.people.map((people, index) => {
				return (
					<div key={index} className="col-md-3">
						<Card
							img={Character}
							name={people.name}
							heart={people.fave}
							id={people.id}
							type={people.type}
							url={people.url}
						/>
					</div>
				);
			})}
		</>
	);
};
