import React from 'react';
import { LocalMovies } from '@mui/icons-material';
import { Avatar, Card, CardHeader, CardMedia, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../../../../../Context/Context';
import style from './style.module.css';

const WatchlistCard = ({ details }) => {
  const { getCard } = useMovieContext(); // global variable
  const navigate = useNavigate();

  const theWl = () => {
    getCard(details.title); // set the value of the card
    return navigate('/userHomepage/Watchlist/Movie'); // redirect to each movie in watchlist
  };

  return (
    <Box className={style.container}>
      <button className={style.button} onClick={theWl}>
        <Card sx={{ borderRadius: '15px', width: '250px', height: '400px' }}>
          <CardHeader
            sx={{ bgcolor: '#1a2a38', color: 'white', height: '70px' }}
            title={details.title}
            avatar={
              <Avatar>
                <LocalMovies color="primary" />
              </Avatar>
            }
          />
          <CardMedia sx={{ height: '100%', width: '100%' }} component="img" alt={details.posterURL} image={`${details.posterURL}`} />
        </Card>
      </button>
    </Box>
  );
};

export default WatchlistCard;
