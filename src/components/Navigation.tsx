import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Toolbar from '@mui/material/Toolbar';
import Fade from '@mui/material/Fade';
import '../assets/styles/Navigation.scss';

const drawerWidth = 240;
const navItems = [
  ['Home', 'main'],
  ['About', 'about'],
  ['Expertise', 'expertise'], 
  ['History', 'history'], 
  ['Projects', 'projects'], 
  ['Contact', 'contact'],
];

function Navigation({parentToChild, modeChange}: any) {
  const {mode} = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('main');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
        setShowBackToTop(window.scrollY > 300);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => item[1]);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (section: string) => {
    if (section === 'main') {
      scrollToTop();
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton 
              sx={{ textAlign: 'center' }} 
              onClick={() => scrollToSection(item[1])}
              className={activeSection === item[1] ? 'nav-item-active' : ''}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
          <Toolbar className='navigation-bar'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            {mode === 'dark' ? (
              <LightModeIcon onClick={() => modeChange()}/>
            ) : (
              <DarkModeIcon onClick={() => modeChange()}/>
            )}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button 
                  key={item[0]} 
                  onClick={() => scrollToSection(item[1])} 
                  sx={{ 
                    color: '#fff',
                    position: 'relative',
                    '&.nav-item-active': {
                      color: '#ab47bc',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: -5,
                        width: '100%',
                        height: '3px',
                        backgroundColor: '#ab47bc',
                        borderRadius: '2px',
                        transform: 'scaleX(1)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease'
                      }
                    }
                  }}
                  className={activeSection === item[1] ? 'nav-item-active' : ''}
                >
                  {item[0]}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
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
      <Fade in={showBackToTop}>
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
            bgcolor: mode === 'dark' ? 'rgba(255, 255, 255, 255)' : 'rgba(0, 0, 0, 0)',
            color: mode === 'dark' ? '#fff' : '#000',
            '&:hover': {
              bgcolor: mode === 'dark' ? 'rgba(255, 255, 255, 255)' : 'rgba(0, 0, 0, 0)',
            },
          }}
          aria-label="back to top"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Fade>
    </>
  );
}

export default Navigation;