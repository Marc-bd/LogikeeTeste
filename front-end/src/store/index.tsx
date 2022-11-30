import { CarsReducer, selectCarsReducer } from "./modules/cars/reducer";
import { legacy_createStore as createStore, combineReducers } from "redux";

const reducers = combineReducers({
	cars: CarsReducer,
	selectCars: selectCarsReducer,
});

const store = createStore(reducers, {});

export default store;
