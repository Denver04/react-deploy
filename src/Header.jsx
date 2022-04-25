import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Logo from './intern/assets/websitelogo.png';
import { Button } from '@mui/material';
import "./App.css";
import PersonIcon from '@mui/icons-material/Person';


 function NavBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:"white"}}>
          <img src={Logo} className="App-logo" />
          <Link to="/" className='Buttons' style={{textDecoration: "none"}}><Button variant="outined" style={{color:"black"}}>Home</Button></Link>
          <Link to="/team" className='Buttons' style={{textDecoration: "none"}}><Button variant="outined" style={{color:"black"}}>Team</Button></Link>
          <Link to="/contact" className='Buttons' style={{textDecoration: "none"}}><Button variant="outined" style={{color:"black"}}>Contact</Button></Link>
          <Link to="/journey" className='Buttons' style={{textDecoration: "none"}}><Button variant="outined" style={{color:"black"}}>The Journey</Button></Link>
          <Link to="/store" className='Buttons' style={{textDecoration: "none"}}><Button variant="outined" style={{color:"black"}}>Store</Button></Link>

          <Button variant="outined" className='User' style={{color:"black"}}>
          <PersonIcon />
          Gagan
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
