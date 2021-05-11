import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
//import {add_infos} from '../redux/reducer';
import { useHistory } from "react-router-dom";
//import requests from "../requests";
//import instance from '../axios';
import Container from "react-bootstrap/Container";
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

function Home() {
  const moviesArray = useSelector((state) => state.movies.moviesArray);
  const moviesType = useSelector((state) => state.movies.moviesType);
  //const dispatch=useDispatch()
  const history = useHistory();

  const base_URL = "https://image.tmdb.org/t/p/original";

  //------------
  const getMovie = (e, id) => {
    e.preventDefault();
    history.push(`/${id}`);
  };
  return (
    <Main>
      <Container>
        <h2>{moviesType} </h2>
        <div className=" right row">
          {moviesArray
            ? moviesArray.map((item) => (
                <Images
                  onClick={(e) => getMovie(e, item.id)}
                  className={"col-3 col-md-3 col-sm-6"}
                >
                  <img
                    src={`${base_URL}${item.poster_path}`}
                    alt={item.title}
                  />
                  <p key={item.id}>Name:{item.title}</p>
                </Images>
              ))
            : null}
        </div>
      </Container>
    </Main>
  );
}

export default Home;

const Main = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 10px;
  height: 100%;

  h2 {
    display: flex;
    justify-content: center;
  }
`;

const Images = styled.div`
  text-align: center;
  align-items: center;

  cursor: pointer;
  img {
    width: 140px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    cursor: pointer;
    padding: 10px 0;
  }
  p {
    margin-top: 5px;
    font-size: 15px;
    font-weight: bolder;
    color: white;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 100px;
    }
    p {
      font-size: 12px;
      margin-top: 2px;
    }
  }
`;
