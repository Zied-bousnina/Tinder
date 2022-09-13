import React from 'react'
import "../header.css"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import {IconButton} from '@mui/material';
import Tinder_logo_PNG3 from "../Tinder_logo_PNG3.png"
function Header() {
  return (
    <div className="header">
        {/* <h1>i'm header</h1> */}
        <IconButton>

        <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>
        <img className='header__logo' src={Tinder_logo_PNG3}/>
        <IconButton>

        <ForumIcon className="header-icon" />
        </IconButton>

    </div>
  )
}

export default Header