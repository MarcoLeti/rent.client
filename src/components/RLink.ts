import { Link } from 'react-router-dom';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { styled } from '@mui/material/styles';

const RLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.vars.palette.secondary.main, // var(--mui-palette-primary-main)
  color: theme.vars.palette.primary.contrastTextChannel, // var(--mui-palette-primary-contrastText)
  textDecoration: 'none',
}));

export default RLink;
