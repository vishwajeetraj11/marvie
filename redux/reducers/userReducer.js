import { USER_LOGIN_SUCCESS } from '../constants/userConstants';

export const userLoginReducer = (state = { userLoggedIn: false }, action) => {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			return { userLoggedIn: true };
		default:
			return { userLoggedIn: false };
	}
};
