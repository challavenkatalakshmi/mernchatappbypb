import React from 'react';
import './MyStyles.css';
import logo from '../images/live-chat.png';
import {IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Users(){
    return (
        <div className='list-container'>
            <div className='ug-header'>
                <img 
                    src={logo} 
                    style={{height:"2rem",
                            width:"2rem",
                            marginLeft:"10px"
                    }}
                />
                <p className='ug-title'>Online Users</p>
            </div>
    

            <div className='sidebar-search'>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input placeholder='search' className='search-box'/>
            </div>
            <div className='ug-list'>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>TestUser</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>TestUser</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>TestUser</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>TestUser</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>TestUser</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>TestUser</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>TestUser</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>TestUser</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>TestUser</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>TestUser</p>
                </div>
            </div>

        </div>
    )
}

export default Users;