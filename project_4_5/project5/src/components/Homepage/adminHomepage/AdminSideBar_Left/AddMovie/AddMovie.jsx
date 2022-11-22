import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  color: 'black',
  border: '2px solid #000',
  borderRadius:'20px',
  boxShadow: 24,
  p: 4,
};

const AddMovie = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Add Movie</button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={boxStyle}>
          <form action="/action_page.php">
            <label for="fname">Title:</label>
            <br />
            <input type="text" id="fname" name="fname" placeholder='Title' />
            <br />
            <label for="lname">Imdb Id:</label>
            <br />
            <input type="text" id="lname" name="lname" placeholder='Imdb Id' />
            <br />
            <label for="lname">Genre:</label>
            <br/>
            <input type="text" id="lname" name="lname" placeholder='Genre' />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddMovie;
