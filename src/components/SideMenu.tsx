import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ExpandLess, ExpandMore, Settings } from '@mui/icons-material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';
import { Collapse } from '@mui/material';
import scss from './SideMenu.module.scss';
import RLink from './RLink';

const drawerWidth = 240;

const menuRouteList = ['/', 'profile', 'vehicles', 'calendar', 'settings', ''];
const menuListTranslations = [
  'Home',
  'Profile',
  'Vehicles',
  'Calendar',
  'Settings',
  'Sign Out',
];
const menuListIcons = [
  <HomeIcon key="home" />,
  <Person2Icon key="person" />,
  <DirectionsCar key="car" />,
  <CalendarMonthIcon key="calendar" />,
  <Settings key="settings" />,
  <ExitToAppIcon key="exit" />,
];

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/logo.svg" alt="Google Logo" height={150} width={150} />
            </div>
            <Divider />
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {menuListTranslations.map((text, index) => (
                <List key={text} disablePadding>
                  {text === 'Vehicles' ? (
                    <>
                      <ListItemButton onClick={handleClick}>
                        <ListItemIcon>{menuListIcons[index]}</ListItemIcon>
                        <ListItemText primary={text} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <RLink to="add-vehicle">
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                <AddCircleIcon />
                              </ListItemIcon>
                              <ListItemText primary="Add Vehicle" />
                            </ListItemButton>
                          </RLink>
                          <RLink to={menuRouteList[index]}>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                <ListIcon />
                              </ListItemIcon>
                              <ListItemText primary="Vehicle List" />
                            </ListItemButton>
                          </RLink>
                        </List>
                      </Collapse>
                    </>
                  ) : (
                    <RLink to={menuRouteList[index]}>
                      <ListItemButton>
                        <ListItemIcon>{menuListIcons[index]}</ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </RLink>
                  )}
                </List>
              ))}
            </List>
          </div>
        </Drawer>
      </Box>
    </Box>
  );
}
