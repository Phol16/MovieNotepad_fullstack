import { LocalMovies } from '@mui/icons-material';
import { Avatar, Box, Card, CardHeader, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../../../../../Context/Context';
import style from './style.module.css';

function AdminMovieCard({ details }) {
  const {getCard} = useMovieContext();
  const navigate = useNavigate();

  const theMovie = ()=>{
    getCard(details.title)
    navigate('/adminHomepage/Movie')
  }
  return (
    <Box className={style.container}>
      <button className={style.button} onClick={theMovie}>
      <Card sx={{ borderRadius: '15px' }}>
        <CardHeader
          sx={{ bgcolor: '#336096', color: 'white' }}
          title={details.title}
          avatar={
            <Avatar>
              <LocalMovies color="primary" />
            </Avatar>
          }
        />
        <CardMedia sx={{width: '300px', height: '400px'}} component="img" alt={details.title} image={`${details.posterURL}`} />
      </Card>
      </button>
    </Box>
  );
}

export default AdminMovieCard;
