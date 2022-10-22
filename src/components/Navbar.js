import { MovieFilter } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <MovieFilter sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            MOVIE LIST
          </Typography>
          <Box sx={{ display: 'block' }}>
              <Button sx={{ color: '#fff' }}>
                Create
              </Button>
              <Button sx={{ color: '#fff' }}>
                Logout
              </Button>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
