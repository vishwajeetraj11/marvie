import { createStore, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { userLoginReducer } from './reducers/userReducer';
const middleware = [thunk];

const reducer = combineReducers({
    userLogin: userLoginReducer
});
const initialState = {
    userLogin: { userLoggedIn: false },
  }
const store = createStore(
	reducer,
	initialState,
);

export default store;
