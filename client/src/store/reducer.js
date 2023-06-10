import { SET_DESTINATION } from "./actions";

const initialState = {
	destination: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DESTINATION:
			return {
				...state,
				destination: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;