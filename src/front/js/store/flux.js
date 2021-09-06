import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			fave: [],
			people: [],
			planets: [],
			vehicles: [],
			details: [],
			properties: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				//reset the global store
				setStore({ demo: demo });
			},
			getPeople: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people")
					.then(resp => {
						console.log(resp.code);
						return resp.json();
					})
					.then(data => {
						let arrPeople = data.results.map(item => {
							return { ...item, fave: false, type: "people" };
						});
						setStore({ people: arrPeople });
					})
					.catch(error => console.log("Error loading People", error));
			},
			getPlanets: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets")
					.then(resp => {
						console.log(resp.code);
						return resp.json();
					})
					.then(data => {
						let arrPlanets = data.results.map(item => {
							return { ...item, fave: false, type: "planets" };
						});
						setStore({ planets: arrPlanets });
					})
					.catch(error => console.log("Error loading Planets", error));
			},
			getVehicles: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles")
					.then(resp => {
						console.log(resp.code);
						return resp.json();
					})
					.then(data => {
						let arrVehicles = data.results.map(item => {
							return { ...item, fave: false, type: "vehicles" };
						});

						setStore({ vehicles: arrVehicles });
					})
					.catch(error => console.log("Error loading Vehicles", error));
			},
			changeHeart: (id, bool, type) => {
				const store = getStore();
				if (type === "people") {
					const heart = store.people.map((elm, i) => {
						if (i === id) elm.fave = bool;
						return elm;
					});
					setStore({ people: heart });
				} else if (type === "planets") {
					const heart = store.planets.map((elm, i) => {
						if (i === id) elm.fave = bool;
						return elm;
					});
					setStore({ planets: heart });
				} else if (type === "vehicles") {
					const heart = store.vehicles.map((elm, i) => {
						if (i === id) elm.fave = bool;
						return elm;
					});
					setStore({ vehicles: heart });
				}
				let aux1 = [].concat(store.people, store.planets, store.vehicles);
				let aux2 = aux1.filter(elm => elm.fave === true);
				setStore({ fave: aux2 });
			},
			showDetails: url => {
				const store = getStore();
				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						let arrDetails = data.result;
						let detalhes = Object.entries(arrDetails.properties);
						setStore({ properties: detalhes });
						setStore({ details: arrDetails });
					})
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
