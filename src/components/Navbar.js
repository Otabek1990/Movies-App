import React, { useEffect } from "react";
import styled from "styled-components";
import ItvLogo from "../TMDB.jpg";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { add_types, add_infos } from "../redux/reducer";
import requests from "../requests";
import instance from "../axios";

function Navbar() {
  const moviesType = useSelector((state) => state.movies.moviesType);
  const moviesArray = useSelector((state) => state.movies.moviesArray);
  const dispatch = useDispatch();

  //----------------------
  const types = [
    "Trending",
    "TopRated",
    "Action",
    "Comedy",
    "Horror",
    "Romance",
    "Mystery",
    "Science",
    "Western",
    "Animation",
    "Tv",
  ];

  //-------------------

  const fetchURL =
    moviesType === "Trending"
      ? requests.fetchTrending
      : moviesType === "TopRated"
      ? requests.fetchTopRated
      : moviesType === "Action"
      ? requests.fetchActionMovies
      : moviesType === "Comedy"
      ? requests.fetchComedyMovies
      : moviesType === "Horror"
      ? requests.fetchHorrorMovies
      : moviesType === "Romance"
      ? requests.fetchRomanceMovies
      : moviesType === "Mystery"
      ? requests.fetchMystery
      : moviesType === "Science"
      ? requests.fetchSciFi
      : moviesType === "Western"
      ? requests.fetchWestern
      : moviesType === "Animation"
      ? requests.fetchAnimation
      : moviesType === "Tv"
      ? requests.fetchTV
      : null;
  //---------------------
  const getGenres = (movie) => {
    dispatch(add_types(movie));
  };
  //-----------------------
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchURL);
      const results = request.data.results;
      results !== undefined && dispatch(add_infos(results));
    };
    fetchData();
    localStorage.setItem("moviesArray",{moviesArray})
  }, [fetchURL]);
  //----------------------------
  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src={ItvLogo} alt="itv" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/">
          <p>Home</p>
        </Link>
      </Logo>
      <Right>
        <DropdownButton variant="info" id="" title="Type of Movies">
          {types.map((movie) => (
            <Dropdown.Item key={movie} onClick={() => getGenres(movie)}>
              {movie}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Right>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: orange;
  align-items: center;
  padding: 13px;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  img {
    height: 40px;
    cursor: pointer;
    border-radius: 100%;
  }
  p {
    margin-top: 12px;
    padding: 0 5px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    :hover {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  p {
    margin-top: 12px;
    padding: 0 5px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    :hover {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;
