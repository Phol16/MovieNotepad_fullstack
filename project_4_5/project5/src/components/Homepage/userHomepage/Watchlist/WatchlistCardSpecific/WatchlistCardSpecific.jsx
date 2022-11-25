import { Delete } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../../../../../Context/Context';
import NavBar from '../../../../theComponents/Navbar/NavBar';
import WatchlistCard from '../WatchlistCard/WatchlistCard';
import DeleteWL from './Delete/DeleteWL';
import style from './style.module.css';

const WatchlistCardSpecific = () => {
  const [state, setState] = useState([]);
  const { theCard, theUserId } = useMovieContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(`http://localhost:8000/movies?search=${theCard}`);
  }, []);

  const fetchData = async (url) => {
    const response = await fetch(url).then((res) => res.json());
    setState(response); // set the value of the details
  };

  const back = () => {
    return navigate('/userHomepage/Watchlist'); // redirect to user homepage
  };

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.contentContainer}>
        <div className={style.content}>
          <WatchlistCard details={state} />
          <section className={style.box}>
            <section className={style.theButtons}>
              <button className={style.button} onClick={back}>
                Back
              </button>
              <DeleteWL theTitle={state.title}/>
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
            <br/>
            <label><h3>Notes</h3></label>
            <input type="text" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default WatchlistCardSpecific;
