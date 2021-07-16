import React, { Component, useContext, useState, useEffect } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import "../../styles/list.scss";

export const PeopleList = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPeople();
	}, []);

	return (
		<>
			{store.People.map((People, index) => {
				return (
					<div key={index} className="col-md-3">
						<Card
							img={"https://ryanacademy.ie/wp-content/uploads/2017/04/user-placeholder.png"}
							name={People.name}
							description={People.url}
						/>
					</div>
				);
			})}
		</>
	);
};
