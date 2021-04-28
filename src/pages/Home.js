import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux';
import {add_infos} from '../redux/reducer';
import {useHistory} from 'react-router-dom';
import requests from "../requests";
import instance from '../axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ReactPaginate from 'react-paginate';




const Home=()=> {
    const movies=useSelector(state=>state.movies.movies)
    const dispatch=useDispatch()
    const [moviesInfos, setMoviesInfos] = useState([])
    const history=useHistory()
    //const API_KEY="2d2fbe2109624c745434d0c3c18b24a0";
    //const TOKEN="43683e700149963c1040ce7cfa2d4web";
    //const ITV_HTTP="https://api.itv.uz/api/content/main/2/list?user=43683e700149963c1040ce7cfa2d4web"

    //-------------

//console.log(moviesInfos)

 const base_URL="https://image.tmdb.org/t/p/original/";
const fetchURL=requests.fetchTrending;
    //------------
     const getMovie=(e,id)=>{
      e.preventDefault()
        history.push(`/${id}`)

    }
    //---------------------------
   useEffect(() => {

      const fetchData=async()=>{
        const request= await instance.get(fetchURL);
        const results=request.data.results
        console.log(results)
        //setMoviesInfos(results)
      dispatch(add_infos(results))

      }
      fetchData()
      const slice1=movies.slice(0,5)
      const slice2=movies.slice(5,10)
      const slice3=movies.slice(10,15)
      const slice4=movies.slice(15,20)

    }, [fetchURL])

   

        return (
            
            <Container>

              <div className="row">
              {movies ? movies.map((item)=>
                <div className={"col-3 table-bordered"}>

                  <p>{item.name}</p>
                  <p>{item.post}</p>
                  <p>{item.id}</p>
                  
                </div>
               
                ):null}  
              </div>
            </Container>
            
        )
    
}

export default Home;

const Main=styled.div`
padding:10px;
display:flex;
flex-direction:column;
background-color:blue;
height:80vh

`
const Columns=styled.div`
display:flex;



`
const Columns1=styled.div`
display:flex;

`
const Columns2=styled.div`
display:flex;

`


const Images=styled.div`
width:1000px;
margin:20px;
cursor:pointer;
img{
    height:200px;
    margin-left:10px;
    cursor:pointer;

}
p{
  margin-top:5px;
  font-size:18px;
  font-weight:bolder;
  color:white
}
`

 /* {moviesInfos.map(movie=>(

            <Images >
     
             <img 
            src={`${base_URL}${movie.poster_path}`} alt={movie.title}
            onClick={()=>getMovie(movie.id)}
            />
            <p>Title:{movie.title} </p>
         
  
         </Images>
          ))
        }*/

            /*<Columns1>
                     {slice2.map(item=>(
              <Images>
              <p>{item.name}</p>
              <p>{item.post}</p>
              <p>{item.id}</p>
              </Images>


              ))}
              </Columns1> 
                <Columns2>
                     {slice3.map(item=>(
              <Images>
              <p>{item.name}</p>
              <p>{item.post}</p>
              <p>{item.id}</p>
              </Images>


              ))}
              </Columns2>*/