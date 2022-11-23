import React, { useState,useEffect } from 'react';
import { useMovieContext } from '../../../../../Context/Context';
import { useNavigate } from 'react-router-dom';
import UserMovieCard from '../MovieCard/UserMovieCard';
import NavBar from '../../../../theComponents/Navbar/NavBar';
import style from './style.module.css';
import { Add } from '@mui/icons-material';

const UserMovieCardSpecific = () => {
  const [disable,setDisable]= useState(false);
  const [state, setState] = useState([]); //variable for the details
  const { theCard,theUserId } = useMovieContext(); //global variable
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(`http://localhost:8000/movies?search=${theCard}`);
  }, []);

  const fetchData = async (url) => {
    const response = await fetch(url).then((res) => res.json());
    setState(response); // set the value of the details
  };

  const addWL= async ()=>{
     await fetch(`http://localhost:8000/user/movies/${theCard}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'x-usersid': `${theUserId}`,
      },
      body:JSON.stringify()
    })
    setDisable(true)
  }

  const back = () => {
    navigate('/userHomepage'); // redirect to user homepage
  };

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.contentContainer}>
        <div className={style.content}>
          <UserMovieCard details={state} />
          <section className={style.box}>
            <section className={style.theButtons}>
              <button className={style.button} onClick={back}>
                Back
              </button>
                <button className={style.addWL} onClick={addWL} disabled={disable}><Add/> Add to Watchlist</button>
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

export default UserMovieCardSpecific;
