import { USER_LOGIN_SUCCESS } from '../constants/userConstants';

export const login = () => async(dispatch) => {
    dispatch({
        type: USER_LOGIN_SUCCESS
    })
}
