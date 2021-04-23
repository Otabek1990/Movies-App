import React from 'react'
import styled from 'styled-components';
import ItvLogo from '../ITVlogo.jpg';
import {Link} from 'react-router-dom'

const Navbar=()=> {
        return (
            <Nav>
                <Logo>
                    <Link to="/"><img src={ItvLogo} alt="itv"/></Link>

                </Logo>
                <Right>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/moviesId"><p>Movies</p></Link>
                </Right>
                
            </Nav>
        )
    
}

export default Navbar;

const Nav=styled.div`
display:flex;
justify-content:space-between;
height:70px;
background-color:rgba(0,0,0,0.8);
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
    font-size:18px;
    cursor:pointer;
    font-weight:bolder;
    color:white;
    :hover{
        color:coral
    }
}
`
