import { IconButton } from '@mui/material'
import React from 'react'
import '../swipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon  from '@mui/icons-material/FlashOn';


function SwipeButtons() {
  return (
    <div className="swipeButtons">
    <IconButton className="swipeButtons_Icon repeat">
        <ReplayIcon  fontSize="large" />
    </IconButton>
    <IconButton className="swipeButtons_Icon left">
        <CloseIcon fontSize="large"/>
    </IconButton>
    <IconButton className="swipeButtons_Icon star">
        <StarRateIcon fontSize="large"/>
    </IconButton>
    <IconButton className="swipeButtons_Icon right">
        <FavoriteIcon fontSize="large"/>
    </IconButton>
    <IconButton className="swipeButtons_Icon lightning">
        <FlashOnIcon fontSize="large"/>
    </IconButton>


    </div>
  )
}

export default SwipeButtons