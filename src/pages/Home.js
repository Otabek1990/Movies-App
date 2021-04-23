import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';


const Home=()=> {
    const TOKEN="43683e700149963c1040ce7cfa2d4web";
    const getMoviesInfos=()=>{
        axios.get(`https://api.itv.uz/api/content/main/2/list?user=`+TOKEN)
        .then(res=>{
            console.log(res)
        } )
    }

    useEffect(() => {
      getMoviesInfos()
    }, [])
    
        return (
            <Main>

                
                
            </Main>
        )
    
}

export default Home;

const Main=styled.div`
height:530px;
background-color:blue


`