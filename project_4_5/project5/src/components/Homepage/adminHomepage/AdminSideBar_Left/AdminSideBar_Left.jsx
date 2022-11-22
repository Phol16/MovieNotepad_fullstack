import { Animation, Diversity3, FilterNone, FlutterDash, Mood, TheaterComedy } from '@mui/icons-material';
import React from 'react';
import { useMovieContext } from '../../../../Context/Context';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';
import AddMovie from './AddMovie/AddMovie';

const AdminSideBar_Left = () => {
  const { getGenre } = useMovieContext();
  const navigate = useNavigate();

  const comedyGenre = () => {
    getGenre('comedy');
  };
  const animationGenre = () => {
    getGenre('animation');
  };
  const dramaGenre = () => {
    getGenre('drama');
  };
  const familyGenre = () => {
    getGenre('family');
  };
  const horrorGenre = () => {
    getGenre('horror');
  };
  const allGenre = () => {
    getGenre('all');
  };

  const logout = () => {
    navigate('/');
  };

  return (
    <div className={style.container}>
      <div className={style.fixedContainer}>
        <div className={style.sorter}>
          Genre:
          <button onClick={comedyGenre} className={style.button}>
            <Mood /> Comedy.{' '}
          </button>
          <button onClick={animationGenre} className={style.button}>
            <Animation /> Animation
          </button>
          <button onClick={dramaGenre} className={style.button}>
            <TheaterComedy />
            Drama
          </button>
          <button onClick={familyGenre} className={style.button}>
            <Diversity3 /> Family
          </button>
          <button onClick={horrorGenre} className={style.button}>
            <FlutterDash /> Horror
          </button>
          <button onClick={allGenre} className={style.button}>
            <FilterNone /> None
          </button>
        </div>
        <div className={style.admin}>
          <div className={style.topPart}>
            Admin
            <button onClick={logout} className={style.logout}>
              Logout
            </button>
          </div>
          <br />
          <AddMovie />
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar_Left;
