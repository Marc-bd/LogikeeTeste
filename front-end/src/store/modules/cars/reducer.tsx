import { actionTypes } from "./actionTypes";
import { AnyAction } from "redux";

const initialState: Object[] = [];

export const CarsReducer = (
	state = initialState,
	{ type, payload }: AnyAction
) => {
	switch (type) {
		case actionTypes.SET_CARS:
			return { ...state, payload };

		default:
			return state;
	}
};

export const selectCarsReducer = (
	state = initialState,
	{ type, payload }: AnyAction
) => {
	switch (type) {
		case actionTypes.SELECT_CARS:
			return { ...state, ...payload };

		default:
			return state;
	}
};
