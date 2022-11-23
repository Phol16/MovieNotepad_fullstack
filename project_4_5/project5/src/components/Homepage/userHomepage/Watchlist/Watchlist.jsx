import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../../../../Context/Context';
import NavBar from '../../../theComponents/Navbar/NavBar'
import style from './style.module.css'
import WatchlistCard from './WatchlistCard/WatchlistCard';

const Watchlist = () => {
  const [wL,setWL] = useState([]);
  const {theUserId} = useMovieContext()

  const navigate = useNavigate();

  useEffect(()=>{
    fetchData('http://localhost:8000/user/watchlist')
  },[])

  const fetchData=async(url)=>{
    const response = await fetch(url,{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-usersid': `${theUserId}`
      }
    }).then(res=>res.json())
    setWL(response)
  }

console.log(wL)
  const displayCard=(e)=>{
    return <WatchlistCard details={e} key={e._id}/>
  }

  const back=()=>{
    navigate('/userHomepage')
  }

  return (
    <div className={style.container}>
      <section className={style.topContainer}>
      <NavBar/>
      </section>
      <section className={style.subContainer}>
        <button onClick={back} className={style.back}>Back</button>
        <div className={style.boxCard}>
          <h2 className={style.textWL}>WatchList</h2>
        <section className={style.card}>
        {wL.map(displayCard)}
        </section>
        </div>
      </section>
    </div>
  )
}

export default Watchlist