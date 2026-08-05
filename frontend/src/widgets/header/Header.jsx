import React from 'react'
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import logo from '../../entities/img/logo.png'
import './Header.css'

export default function Header() {

  return (
    <>
      <header className='header-block'>
        <div className='logo-container'>
          <img src={logo} alt="Logo" className='logo-image'/>
          <p className='title-logo'>Art.Pic.Up Auction</p>
        </div>
        <ul className='link-header'>
          <li><a href="/information" className='information-link'>Information</a></li>
          <li><a href="/roles">Roles</a></li>
        </ul>
        <div className='icon-container'>
          <a href="https://x.com/home"><XIcon /></a>
          <a href="https://t.me/empty_work"><TelegramIcon /></a>
        </div>
        <a className='link-in-auth' href="/registration">Quick Start</a>
      </header>
    </>
  )
}
