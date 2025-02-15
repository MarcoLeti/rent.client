import React from 'react';
import { PageTitle } from './PageTitle';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

interface Props {
  title?: string;
  children: React.ReactNode;
}
export const Page = ({ title, children }: Props) => (
  <Container maxWidth="xl">
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </Box>
  </Container>
);
