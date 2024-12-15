import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import BookList from './components/BookList';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            图书管理系统
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <BookList />
      </Container>
    </>
  );
}

export default App;
