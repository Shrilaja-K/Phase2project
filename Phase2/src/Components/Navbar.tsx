import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import React from 'react'

function Navbar() {
   const navigate = useNavigate();
  return (
    <AppBar position='fixed'>
        <Toolbar sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              py: { xs: 1.5, sm: 1 },
            }}>
            <Typography>
                CineScope
            </Typography>
            <Box>
                <Button color='inherit' onClick={() => navigate('/')}>Home</Button>
                <Button color='inherit' onClick={() => navigate('/filter')}>Filter</Button>
                <Button color='inherit' onClick={() => navigate('/movies')}>Movie Shows</Button>
                <Button color='inherit' onClick={() => navigate('/tv')}>TV Shows</Button>
                <Button color='inherit' onClick={() => navigate('/favorites')}>Favorites</Button>
                <Button color='inherit' onClick={() => navigate('/watchlist')}>Watchlist</Button>
                <Button color='inherit' onClick={() => navigate('/login')}>Login</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
