import React, { useState } from "react";
import {authAxios} from '../utils/authAxios'

const Login = (props) => {

  const [credintials, setCredintials] = useState({
    username: "",
    password: ""
});

const handleChange = (event) => (
    setCredintials({
        ...credintials,
        [event.target.name]: event.target.value})
)

  const loginSubmit = e => {
    e.preventDefault();
    authAxios().post(`/api/login`, credintials)
                .then(res => {
                    console.log('Login log',res);
                    localStorage.setItem('token', res.data.token);
                    props.history.push('/bubbles');
                })
                .catch(err => {
                    console.log(err)
                })
};
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
     


      <form onSubmit={loginSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" 
                   placeholder="Username" 
                   name="username" 
                   value={credintials.username}
                   onChange={handleChange}    
                   />

            <label htmlfor="password">Password</label>
            <input type="password" 
                   placeholder="Password"
                   name="password" 
                   value={credintials.password}
                   onChange={handleChange}
                   />

                <button type="submit">Submit</button>
        </form>
    </>
  );
};

export default Login;
