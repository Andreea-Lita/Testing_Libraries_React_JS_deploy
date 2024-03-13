// // Navbar.jsx
// import React, { useState } from 'react';
// import './Navbar.css'; // Import the CSS file for styling

// const Navbar = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };

//   const removeActive = () => {
//     setIsActive(false);
//   };

//   return (
//     <nav className={`navbar ${isActive ? 'active' : ''}`}>
//       <div className="logo">My Website</div>
//       <ul className="nav-menu">
//         <li onClick={removeActive}>
//           <a href="#home">Home</a>
//         </li>
//         <li onClick={removeActive}>
//           <a href="#about">About</a>
//         </li>
//         <li onClick={removeActive}>
//           <a href="#services">Services</a>
//         </li>
//         <li onClick={removeActive}>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//       <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     </nav>
//   );
// };
// Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'; // Import your custom CSS for styling

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleActiveClass}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <div className={`nav-menu ${isActive ? 'active' : ''}`}>
          <Button color="inherit" onClick={removeActive}>
            Home
          </Button>
          <Button color="inherit" onClick={removeActive}>
            About
          </Button>
          <Button color="inherit" onClick={removeActive}>
            Services
          </Button>
          <Button color="inherit" onClick={removeActive}>
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
