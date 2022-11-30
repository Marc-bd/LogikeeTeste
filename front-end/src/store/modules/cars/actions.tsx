import { actionTypes } from "./actionTypes";

export const setCars = (cars: object) => {
	return {
		type: actionTypes.SET_CARS,
		payload: cars,
	};
};
export const selectCars = (category: object) => {
	return {
		type: actionTypes.SELECT_CARS,
		payload: category,
	};
};
