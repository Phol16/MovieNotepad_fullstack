import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMovieContext } from '../../../../../Context/Context';
import NavBar from '../../../../theComponents/Navbar/NavBar';
import AdminMovieCard from '../MovieCard/AdminMovieCard';
import style from './style.module.css';
import { redirect, useNavigate } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const AdminMovieCardSpecific = () => {
  const [state, setState] = useState([]);
  const [displayButton, setDisplayButton] = useState('display');
  const { theCard } = useMovieContext();
  const navigate = useNavigate();
  const { theUserId } = useMovieContext();

  useEffect(() => {
    fetchData(`http://localhost:8000/movies?search=${theCard}`);
  }, []);

  const fetchData = async (url) => {
    const response = await fetch(url).then((res) => res.json());
    setState(response);
  };

  // if (state.authorId === theUserId) {
  //   setDisplayButton('display');
  // }

  const back = () => {
    navigate('/adminHomepage');
  };

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.contentContainer}>
        <div className={style.content}>
          <AdminMovieCard details={state} />
          <section className={style.box}>
            <section className={style.theButtons}>
              <button className={style.button} onClick={back}>
                Back
              </button>
              <div style={{ display: displayButton }}>
                <button className={style.adminButton}>
                  <Edit />
                </button>
                <button className={style.adminButton}>
                  <Delete />
                </button>
              </div>
            </section>
            <div className={style.boxDetails}>
              <h3>{state.title}</h3>
              <h3>
                Genre: <br /> {state.genre}
              </h3>
              <a target={'_blank'} href={`https://www.imdb.com/title/${state.imdbId}`}>
                <button className={style.button}>Learn More</button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminMovieCardSpecific;
