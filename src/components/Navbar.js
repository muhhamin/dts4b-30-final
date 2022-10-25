import { MovieFilter } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { signOut } from "firebase/auth";
import * as React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebase";

const Navbar = () => {
  const onLogout = async () => {
    try {
      await signOut(auth);
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <AppBar component="nav" position="static">
        <Toolbar>
          <MovieFilter sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "block",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}>
            MOVIE LIST
          </Typography>
          <Box sx={{ display: "block" }}>
            <Button sx={{ color: "#fff" }} onClick={onLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
