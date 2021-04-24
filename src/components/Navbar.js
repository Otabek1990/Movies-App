import React from 'react'
import styled from 'styled-components';
import ItvLogo from '../ITVlogo.jpg';
import {Link} from 'react-router-dom'

const Navbar=()=> {
        return (
            <Nav>
                <Logo>
                    <Link  to="/"><img src={ItvLogo} alt="itv"/></Link>

                </Logo>
                <Right>
                    <Link style={{textDecoration:'none'}} to="/"><p>Home</p></Link>
                </Right>
                
            </Nav>
        )
    
}

export default Navbar;

const Nav=styled.div`
display:flex;
justify-content:space-between;
height:70px;
background-color:orange;
align-items:center;
padding:0 13px;

`
const Logo=styled.div`
img{
    height:40px;
    cursor:pointer;

}
`
const Right=styled.div`
display:flex;

p{
    padding:0 5px;
    font-weight:bolder;
    font-size:18px;
    cursor:pointer;
    color:white;
    text-decoration:none;
    :hover{
        color:rgba(0,0,0,0.7)
    }
}
`
