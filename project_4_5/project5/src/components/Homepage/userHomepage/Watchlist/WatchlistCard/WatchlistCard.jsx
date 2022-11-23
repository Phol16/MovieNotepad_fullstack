import { LocalMovies } from '@mui/icons-material'
import { Avatar, Card, CardHeader, CardMedia } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import style from './style.module.css'

const WatchlistCard = ({details}) => {

  console.log(details)
  const theWl = ()=>{

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