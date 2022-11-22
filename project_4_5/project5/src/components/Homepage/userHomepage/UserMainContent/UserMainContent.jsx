import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMovieContext } from '../../../../Context/Context';
import MovieCard from './MovieCard/UserMovieCard';
import style from './style.module.css';

const UserMainContent = () => {
  const [movieData, setMovieData] = useState([]);
  const { theGenre, theSearched } = useMovieContext();

  useEffect(() => {
    if (theGenre === 'comedy') {
      fetchData(`http://localhost:8000/movies/${theGenre}`);
    }
    if (theGenre === 'animation') {
      fetchData(`http://localhost:8000/movies/${theGenre}`);
    }
    if (theGenre === 'drama') {
      fetchData(`http://localhost:8000/movies/${theGenre}`);
    }
    if (theGenre === 'family') {
      fetchData(`http://localhost:8000/movies/${theGenre}`);
    }
    if (theGenre === 'horror') {
      fetchData(`http://localhost:8000/movies/${theGenre}`);
    }
    if (theGenre === 'all') {
      fetchData(`http://localhost:8000/movies`);
    }
  }, [movieData]);

  const fetchData = async (url) => {
    const response = await fetch(url).then((res) => res.json());
    setMovieData(response);
  };

  const displayCard = (e) => {
    return <MovieCard details={e} key={e._id} />;
  };

  return <div className={style.container}>{movieData.map(displayCard) ? movieData.map(displayCard) : movieData}</div>;
};

export default UserMainContent;
