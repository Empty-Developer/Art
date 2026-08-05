import React from "react";
import Logo from "../../shared/ui/logo-header/Logo.jsx";
import Button from "../../shared/ui/button/Button.jsx";
import "./MainHeader.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
export default function MainHeader() {
  const [open, setOpen] = React.useState(false);
  const [isOpenDiolog, setIsOpenDiolog] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // dialog for create post picture
  const handleClickOpen = () => {
    setIsOpenDiolog(true);
  };

  const handleClose = () => {
    setIsOpenDiolog(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  const DrawerList = (
    <Box sx={{ width: 500 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* Basket */}
    </Box>
  );

  return (
    <>
      <header className="header-block">
        <Logo />
        <div>
          <Button className="basket-button" onClick={toggleDrawer(true)}>
            Basket
          </Button>
          <Button onClick={handleClickOpen}>
            Create Picture Post
          </Button>
          <Button className="logout-button">
            Logout
          </Button>
        </div>
        {/* dialog */}
        <Dialog open={isOpenDiolog} onClose={handleClose}>
          <DialogTitle>Create Post Picture</DialogTitle>
          <DialogContent>
            
            <form onSubmit={handleSubmit} id="create-post-form">
              {/* title */}
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="title"
                label="Enter Title"
                type="text"
                fullWidth
                variant="standard"
              />
              {/* url */}
              {/* <TextField /> */}
              {/* price */}
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="price"
                label="Enter Price"
                type="number"
                fullWidth
                variant="standard"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" form="subscription-form">
              Create
            </Button>
          </DialogActions>
        </Dialog>
        {/* drawer */}
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </header>
    </>
  );
}
