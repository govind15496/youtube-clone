import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";


function Header() {
  const [inputSearch, setInputSearch] = useState("");


  return (
    <div className='header'>
        <div className="header__left">
           <MenuIcon />
            <Link to="/">
            <img 
    className="header__logo" 
    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png' 
          alt='' />
           
            </Link>
    
    
            </div>    
       
        <div className='header__input'>
           <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='Search' />
           <Link to={`/search/${inputSearch}`}>
           <SearchIcon className="header__inputButton" />
           </Link>


        </div>
        <div className="header__icons">
           <VideoCallIcon className='header__icon' />
           <AppsIcon className='header__icon'  />
           <NotificationsNoneIcon className='header__icon'  />
           <Avatar className='header__icon' 
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/30762429?v=4"
            />
        </div>
    </div> 
  )
}

export default Header