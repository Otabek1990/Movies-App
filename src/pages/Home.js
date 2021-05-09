import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux';
import {add_infos} from '../redux/reducer';
import {useHistory, Link} from 'react-router-dom';
import requests from "../requests";
import instance from '../axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ReactPaginate from 'react-paginate';




const Home=()=> {
    const moviesArray=useSelector(state=>state.movies.moviesArray)
    const dispatch=useDispatch()
    const [moviesInfos, setMoviesInfos] = useState([])
    const [moviesType, setMoviesType] = useState("Trending")
    
    const history=useHistory()
    //const API_KEY="2d2fbe2109624c745434d0c3c18b24a0";
    //const TOKEN="43683e700149963c1040ce7cfa2d4web";
    //const ITV_HTTP="https://api.itv.uz/api/content/main/2/list?user=43683e700149963c1040ce7cfa2d4web"

    //-------------

//console.log(moviesInfos)

 const base_URL="https://image.tmdb.org/t/p/original";
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
        //setMoviesInfos(results)
      dispatch(add_infos(results))

      }
      fetchData()

    }, [fetchURL])

   console.log(moviesArray)

        return (
            <Main>
              <Left>
                <h5>Type of Movies</h5>
               <Link to="trending"><p>Trending </p></Link>
               <Link to="topRated"><p>Top Rated </p></Link>
               <Link><p>Action</p></Link>
               <Link><p>Comedy</p></Link>
               <Link><p>Horror</p></Link>
               <Link><p>Romance</p></Link>
               <Link><p>Mystery</p></Link>
               <Link><p>Science</p></Link>
               <Link><p>Western</p></Link>
               <Link><p>Animation</p></Link>
               <Link><p>Tv</p></Link>


              </Left>
              <Right>
            <Container >

              <h2>{moviesType} Movies</h2>
              <div className=" right row">
              {moviesArray ? moviesArray.map((item)=>
                <Images className={"col-3 col-md-3 col-sm-6"}>
                   <img src={`${base_URL}${item.poster_path}`} alt={item.title}/>
                  <p>Name:{item.title}</p>
                  <p>Id: {item.id}</p>
                  
                </Images>
               
                ):null} 
                </div> 
            </Container>
            </Right>
            </Main>
            
        )
    
}

export default Home;

const Main=styled.div`
display:grid;
grid-template-columns:160px auto;
background-color:rgba(0,0,0,0.4);
padding:20px 10px;
position:relative;

h2{
  display:flex;
  justify-content:center;
}

`
const Left=styled.div`
margin:20px 10px;
margin-top:50px;
h5{
  margin-bottom:20px;
}
p{
  cursor:pointer;
  color:black;
  font-size:15px;
  font-weight:500;
  list-style-type:none;
  text-decoration-line:none;

  
:hover{
  color:yellow;

}

`
const Right=styled.div`

margin-top:10px;

`

const Images=styled.div`
text-align:center;
align-items:center;

cursor:pointer;
img{
  width:140px;
  display:flex;
  justify-content:center;
  margin:0 auto;
  cursor:pointer;
  padding:10px 0;


}
p{
  margin-top:5px;
  font-size:15px;
  font-weight:bolder;
  color:white
}
@media screen and (max-width:600px){
  img{
    width:100px;
  }
  p{
    font-size:12px;
    margin-top:2px;
  }
}
`

 