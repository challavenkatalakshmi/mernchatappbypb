import React from 'react';
import logo from '../images/live-chat.png';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function Login(){
    return (
        <div className='login-container'>
            <div className='image-container'>
                <img src={logo} alt="logo" className='welcome-logo'/>
                
            </div>
            <div className='login-box'>
                <p>Login to your Account</p>
                <TextField 
                id="standard-basic" 
                label="Enter UserName" 
                variant="outlined" />

                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />

                <Button variant="outlined">
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login;