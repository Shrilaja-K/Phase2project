import { AppBar, Box, Button, Icon, Toolbar, Typography, IconButton, Drawer, ListItem,ListItemButton, ListItemText, List } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authAction';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerItems = [
    { text: 'Home', path: '/' },
    { text: 'Movie Shows', path: '/movies' },
    { text: 'TV Shows', path: '/tv' },
    { text: 'Favorites', path: '/favorites' },
    { text: 'Watchlist', path: '/watchlist' },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      <AppBar position='fixed'
        sx={{
          backgroundColor: '#181C14',
          boxShadow: 'none',
          borderBottom: '2px solid #3C3D37'
        }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            py: 1,
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{ color: '#ECDFCC' , display: { xs: "block" }}}>
            <MenuIcon />
          </IconButton>
          <Typography sx={{
            fontSize: 22, fontWeight: 'bold', cursor: 'pointer',
            color: '#ECDFCC', '&:hover': { color: '#697565' }
          }} onClick={() => navigate('/')}>
            CineScope
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button color='inherit' sx={{
              color: '#ECDFCC',
              border: '1px solid #697565',
              px: 3,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#3C3D37',
              }
            }} onClick={() => navigate('/login')}>
              Login
            </Button>
          </Box>


          
          </Toolbar>
      </AppBar>

          <Drawer anchor='left' open={open} onClose={toggleDrawer}>
            <Box sx={{
              width: 250,
              height: '100%',
              backgroundColor: '#181C14',
              color: '#ECDFCC',
            }}>
              <Typography variant='h5'
                sx={{ py: 2, textAlign: 'center', borderBottom: '1px solid #3C3D37' }}>
                Menu
              </Typography>
              <List>
                {drawerItems.map((item) => (
                  <ListItem
                    key={item.text} >
                    <ListItemButton sx={{
                      "&:hover": {
                        backgroundColor: '#3C3D37',
                      }
                    }}
                      onClick={() => {
                        navigate(item.path);
                        toggleDrawer();
                      }
                      }>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}

                <ListItem>
                  <ListItemButton sx={{
                    "&:hover": {
                      backgroundColor: '#3C3D37',
                    }
                  }}
                    onClick={() => {
                      navigate('/login');
                      toggleDrawer();
                    }
                    }>
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          </>
        
        )
}

        export default Navbar;