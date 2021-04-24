import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import {add_infos} from '../redux/reducer';
import itvLogo from '../ITVlogo.jpg';
import {Link,useHistory} from 'react-router-dom';
import requested from "../moviesInfos"
//import ReactPaginate from 'react-paginate';




const Home=()=> {
    const movies=useSelector(state=>state.movies)
    const dispatch=useDispatch()
    console.log(movies)
    const history=useHistory()
    const API_KEY="2d2fbe2109624c745434d0c3c18b24a0"
    const [moviesInfos, setMoviesInfos] = useState([])
    //const TOKEN="43683e700149963c1040ce7cfa2d4web";
    //const ITV_HTTP="https://api.itv.uz/api/content/main/2/list?user=43683e700149963c1040ce7cfa2d4web"

    //-------------
console.log(requested)
    const array=[
    {
    id:"otash"
     },
     {
        id:"newId"
     }
    ]
    //------------------------------
    const getMoviesInfos=()=>{
      const instance=axios.create({
        baseURL:"https://api.themoviedb.org/3",
      })
      instance.get(`/${requested. fetchComedyMovies}`)
      .then(res=>
        console.log(res)
  
        )
        


      /*axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
      .then(res=>{
        console.log(res.data)
        console.log(res.data.homepage)

        console.log(res.data.poster_path)

       const datas=res.data;


        const MoviesObj={
          id:datas.id,
          title:datas.title,
          posterUrl:datas.homepage,
          genres:datas.genres[0].name
        }
        setMoviesInfos([MoviesObj])
      }
        )*/
    
    }
console.log(moviesInfos)
    //------------
    const getMovie=(id)=>{
        history.push(`/${id}`)

    }
    //---------------------------
    useEffect(() => {
      getMoviesInfos()
      dispatch(add_infos("fozilov"))
    }, [])
    
        return (
            <Main>
            {moviesInfos ? moviesInfos.map(item=>
              
            <Images>
             <img 
            src={item.posterUrl} alt="movie"
            onClick={()=>getMovie(item.id)}
            />
            <p>Title: {item.title}</p>
            <p>Genres: {item.genres}</p>
         
         </Images>
         ):null}    
                
            </Main>
        )
    
}

export default Home;

const Main=styled.div`
display:flex;
height:530px;
background-color:blue;


`
const Images=styled.div`
margin:10px;
img{
    height:200px;
    margin-left:10px;
    cursor:pointer;
}
`