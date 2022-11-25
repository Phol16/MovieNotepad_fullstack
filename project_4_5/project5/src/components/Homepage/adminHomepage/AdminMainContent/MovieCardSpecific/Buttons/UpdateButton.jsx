import React, { useState } from 'react';
import { useMovieContext } from '../../../../../../Context/Context';
import { Edit } from '@mui/icons-material';
import { Modal, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';
import { useEffect } from 'react';

const theStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

const UpdateButton = ({ theTitle }) => {
  const [open, setOpen] = useState(false); // variable for open/close
  const [data, setData] = useState({});
  const { getUpdate, theUserId } = useMovieContext(); // global variable

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true); // set the value to true/open
  const handleClose = () => setOpen(false); // set the value to false/close

  //the values of ...
  let title = '';
  let imdbId = '';
  let genre = [];
  let posterURL = '';

  useEffect(() => {
    fetchData(`http://localhost:8000/movies?search=${theTitle}`);
  }, [open]);

  const fetchData = async (url) => {
    const response = await fetch(url).then((res) => res.json());
    setData(response); // set the value of the details
  };

  const theValue = (e) => {
    setData({ title: title.value, imdbId: imdbId.value, genre: [genre.value], posterURL: posterURL.value }); // set the values of ...
  };

  const theMovie = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:8000/adminUser/movies/${theTitle}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-usersid': `${theUserId}`,
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());

    // check if the user is the one who uploaded the movieData
    if (response.error === `No Movie published with title:${theTitle}`) {
      return handleClose(); // clsoe the modal
    }

    getUpdate(data.title); // update
    navigate('/adminHomepage'); // redirect to admin homepage
  };

  return (
    <span>
      <button className={style.theAdminButton} onClick={handleOpen}>
        <Edit />
      </button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Stack sx={theStyle}>
          <form onSubmit={theMovie}>
            <label htmlFor="title" className={style.label}>
              Title:
              <br />
              <input type="text" id="title" name="title" placeholder="Title" onChange={theValue} ref={(e) => (title = e)} value={data.title} />
            </label>
            <br />
            <br />
            <label htmlFor="imdbId" className={style.label}>
              Imdb Id:
              <br />
              <input type="text" id="imdbId" name="imdbId" placeholder="Imdb Id" onChange={theValue} ref={(e) => (imdbId = e)} value={data.imdbId} />
            </label>
            <br />
            <br />
            <label htmlFor="genre" className={style.label}>
              Genre:
              <br />
              <input type="text" id="genre" name="genre" placeholder="Genre" onChange={theValue} ref={(e) => (genre = e)} value={data.genre} />
            </label>
            <br />
            <br />
            <label htmlFor="posterURL" className={style.label}>
              PosterUrl:
              <br />
              <input type="text" id="posterURL" name="posterURL" placeholder="PosterURL" onChange={theValue} ref={(e) => (posterURL = e)} value={data.posterURL} />
            </label>
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
          <button className={style.button} onClick={handleClose}>
            Cancel
          </button>
        </Stack>
      </Modal>
    </span>
  );
};

export default UpdateButton;
