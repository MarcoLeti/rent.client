import {
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Page } from '../components/Page';
import Paper from '@mui/material/Paper';
import type {} from '@mui/material/themeCssVarsAugmentation';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const RButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.vars.palette.primary.main, // var(--mui-palette-primary-main)
  color: theme.vars.palette.primary.contrastText, // var(--mui-palette-primary-contrastText)
}));

const RSButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.vars.palette.secondary.main, // var(--mui-palette-primary-main)
  color: theme.vars.palette.secondary.contrastText, // var(--mui-palette-primary-contrastText)
}));

const RLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.vars.palette.secondary.main, // var(--mui-palette-primary-main)
  color: theme.vars.palette.primary.contrastTextChannel, // var(--mui-palette-primary-contrastText)
  textDecoration: 'none',
}));

export const ComponentsTest = () => (
  <Page title="Components Test">
    <Paper elevation={3}>
      <RButton variant="contained">Primary</RButton>
      <RSButton>Secondary</RSButton>
      <RLink to="sbn">
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon key="home" />
          </ListItemIcon>
          <ListItemText primary={'text'} />
        </ListItemButton>
      </RLink>
    </Paper>
  </Page>
);
