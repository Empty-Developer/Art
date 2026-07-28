import React from 'react'
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import logo from '../../shared/img/logo.png'
import './Header.css'
import Button from '../../shared/ui/button/Button';

export default function Header() {

  return (
    <>
      <header className='header-block'>
        <div className='logo-container'>
          <img src={logo} alt="Logo" className='logo-image'/>
          <p className='title-logo'>Art.Pic.Up Auction</p>
        </div>
        <ul className='link-header'>
          <li><a href="#" className='information-link'>Information</a></li>
          <li><a href="#">Roles</a></li>
        </ul>
        <div className='icon-container'>
          <a href="#"><XIcon /></a>
          <a href="#"><TelegramIcon /></a>
        </div>
        {/* <a className='link-in-auth' href="#">Quick Start</a> */}
        <Button>
          Quick Start
        </Button>
      </header>
    </>
  )
}
