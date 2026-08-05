import React from "react";
import './Logo.css'
import logo from '../../../entities/img/logo.png'

export default function Logo() {
  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
        <p className="title-logo">Art.Pic.Up Auction</p>
      </div>
    </>
  );
}
