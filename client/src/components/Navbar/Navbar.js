import {
  AppBar,
  Avatar,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "./Styles";
import memories from "../../img/memories.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const {
    appBar,
    heading,
    image,
    brandContainer,
    profile,
    purple,
    toolbar,
    userName,
  } = useStyles();
  const user = null;
  return (
    <AppBar className={appBar} position="static" color="inherit">
      <div className={brandContainer}>
        <Stack display="flex" direction="row">
          <Typography
            component={Link}
            to="/"
            className={heading}
            variant="h2"
            align="center"
          >
            Memories
          </Typography>
          <img className={image} src={memories} alt="memories" height="60" />
        </Stack>
      </div>

      <Toolbar className={toolbar}>
        {user ? (
          <div className={profile}>
            <Avatar
              className={purple}
              src={user.result.imageUrl}
              alt={user.result.name}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
