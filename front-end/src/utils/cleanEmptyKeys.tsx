import { FormCarValues } from "../interfaces/propsInterface";

export const cleanData = (obj: any): any => {
	// modifies passed obj in place, removing empty properties (inc. empty arrays)
	Object.keys(obj).forEach((k) => {
		if (
			!obj[k] ||
			obj[k] === undefined ||
			(Array.isArray(obj[k]) && obj[k].length === 0) ||
			obj[k].replace(/\s+/g, "") === ""
		) {
			delete obj[k];
		}
	});

	return obj;
};
