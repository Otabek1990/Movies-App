import {createSlice} from '@reduxjs/toolkit';

export const initialState={
	moviesArray:[]
};

const movies=createSlice({
	name:"movies",
	initialState,
	reducers:{
		add_infos:(state,action)=>{
		state.moviesArray=[...action.payload]
		}
	}
})

export const {add_infos}=movies.actions;
export default movies.reducer;

