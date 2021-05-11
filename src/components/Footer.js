import { BottomNavigation } from "@material-ui/core";
import React from "react";
import styled from "styled-components";


const Footer = (props) => {
  

  

  return (
    <FooterComponent>
      <h5>Questions? Contact us.</h5>
      <Bottom className="container">
        <div className="row">
           <div className="col col-4">
              Contact Us
           </div>
           <div className="col col-4">
              Account
           </div>
           <div className="col col-4">
              Help Center
           </div>
          </div>
        <div className="row">
           <div className="col col-4">
              Privacy
           </div>
           <div className="col col-4">
              Jobs
           </div>
           <div className="col col-4">
              Terms of Use
           </div>
          </div>
        <div className="row">
           <div className="col col-4">
              FAQ
           </div>
           <div className="col col-4">
              Netflix Originals
           </div>
           <div className="col col-4">
              Legal Notice
           </div>
          </div>
      </Bottom>
    </FooterComponent>
  );
};

export default Footer;

const FooterComponent = styled.div`
  background-color: coral;
  height:100%;
 display:flex;
 flex-direction:column;
 padding:10px 20px;;
 h5{
   
   text-align:left;
   margin-left:17px
 }
`
const Bottom=styled.div`
display:flex;
flex-direction:column;
.row{
  margin-top:6px;
  font-size:15px;
  color:rgba(0,0,0,0.7);
  cursor:pointer
}
.col:hover{
  color:royalblue;
  text-decoration:underline

}
`
