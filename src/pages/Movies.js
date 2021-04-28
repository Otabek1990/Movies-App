import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';


const Movies=()=> {
	    const {moviesId}=useParams();
        const movies=useSelector(state=>state.movies.movies)
    console.log(movies)

    const getId=movies.filter(item=>
    	 item.id==moviesId
    
    	)


    
  
    console.log(moviesId)
console.log(getId)
        return (
            <Main>
            {getId.map(item=>(
            	<Infos>
            	<p>{item.name}</p>
            	<p>{item.post}</p>
            	<p>{item.id}</p>
                </Infos>
            	))
        }
              
            </Main>
        )
    
}

export default Movies;

const Main=styled.div`
display:flex;
height:530px;
background-color:blue;


`
const Infos=styled.div`
margin:20px;
p{
padding:5px;
cursor:pointer;
color:white;
font-size:20px

}
`
