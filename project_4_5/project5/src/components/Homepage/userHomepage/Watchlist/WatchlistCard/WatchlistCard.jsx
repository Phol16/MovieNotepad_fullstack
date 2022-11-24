import { LocalMovies } from '@mui/icons-material'
import { Avatar, Card, CardHeader, CardMedia } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMovieContext } from '../../../../../Context/Context'
import style from './style.module.css'

const WatchlistCard = ({details}) => {
  const { getCard}=useMovieContext();
  const navigate = useNavigate();

  const theWl = ()=>{
    getCard(details.title)
    return navigate('/userHomepage/Watchlist/Movie')
  }
  return (
    <Box className={style.container}>
    <button className={style.button} onClick={theWl}>
      <Card sx={{ borderRadius: '15px' }}>
        <CardHeader
          sx={{ bgcolor: '#1a2a38', color: 'white' }}
          title={details.title}
          avatar={
            <Avatar>
              <LocalMovies color="primary" />
            </Avatar>
          }
        />
        <CardMedia sx={{ width: '300px', height: '400px' }} component="img" alt={details.posterURL} image={`${details.posterURL}`} />
      </Card>
    </button>
  </Box>
  )
}

export default WatchlistCard