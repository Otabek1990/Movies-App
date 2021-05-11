import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Movies() {
  const { moviesId } = useParams();
  const moviesArray = useSelector((state) => state.movies.moviesArray);
  const getId = moviesArray.filter((item) => item.id === Number(moviesId));
  const base_URL = "https://image.tmdb.org/t/p/original";
  return (
    <Main>
      {getId.map((item) => (
        <Infos key={item.id}>
          <img key={item.id} src={`${base_URL}${item.poster_path}`} alt={item.title} />
          <Right key={item.id}>
            <p key={item.id}>
              <span>Name: </span> {item.title}
            </p >
            <p key={item.id}>
              <span>Overview: </span> {item.overview}
            </p>
            <p key={item.id}>
              <span>Release date: </span> {item.release_date}
            </p>
            <p key={item.id}>
              <span>Average rating: </span> {item.vote_average}
            </p>
          </Right>
        </Infos>
      ))}
    </Main>
  );
}

export default Movies;

const Main = styled.div`
  height: 530px;
  background-color: blue;
`;
const Infos = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: rows;
  p {
    cursor: pointer;
    color: white;
    font-size: 20px;
  }

  img {
    width: 200px;
  }
  @media screen and (max-width:767px){
    p{
      font-size:13px;
    }
    img{
      height:370px;
    }
  }
`;
const Right = styled.div`
  padding-left: 30px;
  span {
    color: black;
    font-weight: bolder;
  }
`;
