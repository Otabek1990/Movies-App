import {combineReducers} from "redux";
import moviesReducer from './reducer';

 const rootReducer=combineReducers({
	movies:moviesReducer,

})
 export default rootReducer;