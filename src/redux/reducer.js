import {createSlice} from '@reduxjs/toolkit';

export const initialState={
	movies:[]
};

const movies=createSlice({
	name:"movies",
	initialState,
	reducers:{
		add_infos:(state,action)=>{
		state.movies.push(action.payload)
		}
	}
})

export const {add_infos}=movies.actions;
export default movies.reducer;

/*const reducer=(state=initialState,action)=>{
	switch(action.type){
		case ADD_MOVIES:
		return state.movies.push(action.payload);
		case "MINUS_MOVIES":
		return state-1;
		default:
		return state
	}

}
export default reducer;*/