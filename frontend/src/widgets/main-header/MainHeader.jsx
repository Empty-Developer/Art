import React from "react";
import Logo from "../../shared/ui/logo-header/Logo.jsx";
import Button from "../../shared/ui/button/Button.jsx";
import './MainHeader.css'
export default function MainHeader() {
  return (
    <>
      <header className="header-block">
        <Logo />
        <div>
          <Button className="basket-button">
            Basket
          </Button>
          <Button>
            Create Picture Post
          </Button>
          <Button className="logout-button">
            Logout
          </Button>
        </div>
      </header>
    </>
  );
}
