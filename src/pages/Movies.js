import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

const Movies=()=> {
	    const {moviesId}=useParams();

	 const array=[
    {
    id:"otash",
    name:"Otabekjon",
    poster:"Otashdan Poster",
    	about:"OTashdan About",
    	image:"Otashdan Image"
     },
     {
        id:"newId",
        name:"ism",
    	poster:"lavha",
    	about:"haqida",
    	image:"rasm"

     }
    ]
    const getId=array.filter(ind=>
    	ind.id===moviesId
    	)
    
    //console.log(arr)
console.log(getId)
        return (
            <Main>
            {getId.map(item=>(
            	<Infos>
            	<p>{item.name}</p>
            	<p>{item.poster}</p>
            	<p>{item.about}</p>
            	<p>{item.image}</p>
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
