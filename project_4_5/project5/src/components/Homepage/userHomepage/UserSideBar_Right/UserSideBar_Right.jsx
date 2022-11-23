import React from 'react'
import { useMovieContext } from '../../../../Context/Context'
import style from './style.module.css'

const UserSideBar_Right = () => {
  const {getSearched, theSearched} = useMovieContext();

  const selected=(e)=>{
  }

  return (
    <div className={style.container}>
      <div className={style.fixedContainer}>
      <label htmlFor="search">Search Movie Here:</label>
      <input onChange={selected} type='text' id='search' name='search' placeholder='Search'/>
      </div>
    </div>
  )
}

export default UserSideBar_Right