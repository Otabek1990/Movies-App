import {ADD_MOVIES} from './type';

export const addMovies=(payload)=>{
	return{
		type:ADD_MOVIES,
		payload:payload

	}
}