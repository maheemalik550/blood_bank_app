import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { navItems } from '../utils/route_list';
import { useSelector } from 'react-redux';
import { Button, Link } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import Swal from 'sweetalert2';

const drawerWidth = 240;

function Navbar(props) {

  const state_data = useSelector((state)=>state.user_auth)
  console.log(state_data)
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handlefunc = async()=>{
    try {
      await signOut(auth); // Sign out the user
      console.log('User logged out successfully');
      // You can redirect the user to the login page or perform any other necessary actions
      navigate('/');
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
      console.error('Error logging out:', error);
      // Handle error if needed
    }

    console.log("console is done")
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Blood Bank
      </Typography>
      <Divider />
      <List>
      {
            navItems.map((items,index)=>{
              const {label,link,both,auth_required} = items
              const handleFunction2 = ()=>{
                if (label === "Logout") {
                  handlefunc(); // Call your handlefunc function for Logout button
                } else {
                  navigate(link); // Navigate to the specified link for other buttons
                }
              }
                return  both === true|| auth_required === state_data.user_auth ? (
               <ListItem key={index} disablePadding>
                <ListItemButton onClick={handleFunction2} key={index} sx={{ textAlign: 'center' }}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
      
                ):(
                  null
                )
            })
           }
       
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'red',color:"white" }}>
        <Toolbar>
          <IconButton
            color="red"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Blood Bank 
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {
            navItems.map((items,index)=>{
              const {label,link,both,auth_required} = items
              const handleFunction = ()=>{
                if (label === "Logout") {
                  handlefunc(); // Call your handlefunc function for Logout button
                } else {
                  navigate(link); // Navigate to the specified link for other buttons
                }
              }
                return  both === true || auth_required === state_data.user_auth ? (
                 <>
                  <Button onClick={handleFunction} key={index} sx={{ color: "white" }}>
                    {label}
                </Button>
                 </>
                ):(
                  null
                )
            })
           }
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export {Navbar};
