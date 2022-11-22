import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../theComponents/Navbar/NavBar';
import { Email, Lock } from '@mui/icons-material';
import { useMovieContext } from '../../Context/Context';

const Login = () => {
  const [emailAccount, setEmailAccount] = useState([]);
  const [passwordAccount, setPasswordAccount] = useState([]);
  const [inputValid, setInputValid] = useState('');
  const {getUserId} = useMovieContext();
  const navigate = useNavigate();

  const theEmail = (e) => {
    setEmailAccount(e.target.value);
  };
  const thePassword = (e) => {
    setPasswordAccount(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    const validUser = await fetch(`http://localhost:8000/adminUser?Email=${emailAccount}`).then((res) => res.json());

    if (!validUser.theAdminUser || validUser.theAdminUser.email !== emailAccount || validUser.theAdminUser.password !== passwordAccount) {
      return setInputValid('Invalid Input');
    }
    getUserId(validUser.theAdminUser._id)
    if (validUser.theAdminUser.role === 'admin_User') {
      return navigate('/adminHomepage');
    }
    navigate('/userHomepage');
  };

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.subContainer}>
        LOGIN
        <form
          onSubmit={(e) => {
            submit(e);
          }}
        >
          <label htmlFor="Email">
            <span>
              <Email /> Email:
            </span>
            <input onChange={theEmail} type="text" id="Email" name="Email" required placeholder="Email" />
          </label>
          <br />
          <label htmlFor="Password">
            <span>
              <Lock /> Password:
            </span>
            <input onChange={thePassword} type="password" id="Password" name="Password" required placeholder="password" />
          </label>
          <br />
          <span className={style.span}>{inputValid}</span>
          <br />
          <input className={style.submit} type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
