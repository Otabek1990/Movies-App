import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useSelector,useDispatch} from 'react-redux';
import {add_infos} from '../redux/reducer';


const Footer = (props) => {
 const moviesArray=useSelector(state=>state.movies.moviesArray)
 const dispatch=useDispatch()
console.log(moviesArray)

   

const firstPage=()=>{


}
const secondPage=()=>{


}
const thirdPage=()=>{


}

/*useEffect(() => {

}, [])*/
  return (
    <FooterComponent>
<Buttons>
<button onClick={firstPage}>1</button>
<button onClick={secondPage}>2</button>
<button onClick={thirdPage}>3</button>
<button>4</button>
<button>5</button>
<button>6</button>
<button>7</button>
<button>8</button>
<button>9</button>
<button>10</button>
</Buttons>

    </FooterComponent>
  )
}

export default Footer;

const FooterComponent=styled.div`
background-color:coral;

`
const Buttons=styled.div`
display:flex;
justify-content:center;

button{
	margin:10px;
	margin-left:5px;
	padding:6px 10px;
   border-radius:2px;
   border:none;
   cursor:pointer;
   transition:0.3s ease;
   :hover{
   	background-color:orange
  }
}
`