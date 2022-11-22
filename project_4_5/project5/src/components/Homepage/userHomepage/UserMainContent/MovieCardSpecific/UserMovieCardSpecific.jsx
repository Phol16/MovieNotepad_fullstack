import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMovieContext } from '../../../../../Context/Context';
import NavBar from '../../../../theComponents/Navbar/NavBar';
import style from './style.module.css';
import { redirect, useNavigate } from 'react-router-dom';
import UserMovieCard from '../MovieCard/UserMovieCard';

const UserMovieCardSpecific = () => {
  const [state,setState] = useState([]);
  const {theCard}=useMovieContext();
  const navigate = useNavigate()

  useEffect(()=>{
    fetchData(`http://localhost:8000/movies?search=${theCard}`)
  },[])

  const fetchData = async(url)=>{
    const response = await fetch(url).then((res)=>res.json())
    setState(response)
  }

  console.log('hello')
  const back = ()=>{
    navigate('/userHomepage')
  }

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.contentContainer}>
      <button className={style.button} onClick={back}>Back</button>
      <div className={style.content}>
      <UserMovieCard details={state}/>
      <div className={style.boxDetails}>
        <h3>{state.title}</h3>
        <a target={'_blank'} href={`https://www.imdb.com/title/${state.imdbId}`}><button className={style.button}>Learn More</button></a>
        <h3>Genre: {state.genre}</h3>
      </div>
      </div>
      </div>
    </div>
  );
};

export default UserMovieCardSpecific;
