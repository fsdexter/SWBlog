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
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeHeart: (id, bool, type) => {
				const store = getStore();
				if (type === "people") {
					const heart = store.people.map((elm, i) => {
						if (i === id) elm.fave = bool;
						return elm;
					});
					setStore({ people: heart });
				}
			},
			showDetails: url => {
				const store = getStore();

				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						let arrDetails = data.result;
						console.log(arrDetails);
						var detalhes = Object.entries(arrDetails.properties);
						setStore({ properties: detalhes });
						setStore({ details: arrDetails });
						console.log(details);
					})
					.catch(error => console.log("Error loading message from backend", error));

				//var detalhes = Object.entries(detalis.properties)

				//setStore({ properties: Object.entries(store.details.properties) })
			}
		}
	};
};

export default getState;
