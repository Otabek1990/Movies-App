import {createSlice} from '@reduxjs/toolkit';

export const initialState={
	moviesArray:[],
	moviesType: "Trending"
};

const movies=createSlice({
	name:"movies",
	initialState,
	reducers:{
		add_infos:(state,action)=>{
		state.moviesArray=[...action.payload]
		},
		add_types:(state,action)=>{
			state.moviesType=action.payload
		}
	}
})

export const {add_infos,add_types}=movies.actions;
export default movies.reducer;

