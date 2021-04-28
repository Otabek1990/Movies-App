import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useSelector,useDispatch} from 'react-redux';
import {add_infos} from '../redux/reducer';


const Footer = (props) => {
 const movies=useSelector(state=>state.movies.movies)
 const dispatch=useDispatch()
console.log(movies)

    const example=[
    {
      post:"img",
      name:"titanic",
      id:123,

    },
     {
      post:"img222",
      name:"titanic22",
      id:12322,

    },
     {
      post:"img33",
      name:"titanic33",
      id:12333,

    },
     {
      post:"img44",
      name:"titanic44",
      id:12344,

    },
     {
      post:"img55",
      name:"titanic55",
      id:12355,

    } ,
    {
      post:"img66",
      name:"titanic66",
      id:12366,

    },
     {
      post:"img77",
      name:"titanic77",
      id:12377,

    },{
      post:"img88",
      name:"titanic88",
      id:12388,

    },{
      post:"img99",
      name:"titanic99",
      id:12399,

    },{
      post:"img100",
      name:"titanic100",
      id:123100,

    },{
      post:"img111",
      name:"titanic111",
      id:123111,

    },{
      post:"img111",
      name:"titanic111",
      id:123111,

    },{
      post:"img111",
      name:"titanic111",
      id:123111,

    },{
      post:"img111",
      name:"titanic111",
      id:123111,

    },{
      post:"img111",
      name:"titanic111",
      id:123111,

    }
    ]

const firstPage=()=>{
	console.log(111)
   const slice1=example.slice(0,5)
   dispatch(add_infos(slice1))

}
const secondPage=()=>{
		console.log(222)
   const slice2=example.slice(5,10)
   dispatch(add_infos(slice2))

}
const thirdPage=()=>{
		console.log(333)
   const slice3=example.slice(10,15)
   dispatch(add_infos(slice3))

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
	padding:10px 15px;
   border-radius:2px;
   border:none;
   cursor:pointer;
   transition:0.3s ease;
   :hover{
   	background-color:orange
  }
}
`