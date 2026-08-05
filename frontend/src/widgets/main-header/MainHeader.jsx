import React from "react";
import Logo from "../../shared/ui/logo-header/Logo.jsx";
import Button from "../../shared/ui/button/Button.jsx";
import './MainHeader.css'
import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";
export default function MainHeader() {
  const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 500 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* create picture */}
    </Box>
  )

  return (
    <>
      <header className="header-block">
        <Logo />
        <div>
          <Button className="basket-button">
            Basket
          </Button>
          <Button onClick={toggleDrawer(true)}>
            Create Picture Post
          </Button>
          <Button className="logout-button">
            Logout
          </Button>
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </header>
    </>
  );
}
