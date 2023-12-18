import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

// Import Material-UI components
import { Container, TextField, Button, Typography, Paper, Link as MuiLink } from '@mui/material';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      justifyContent="center"
      style={{ marginTop: "30px" }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" style={{ fontFamily: 'Andika, sans-serif' }} gutterBottom>
          Log In
        </Typography>
        <form onSubmit={handleFormSubmit} style={{ width: '100%', marginTop: '16px' }}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label={
          <Typography variant="body1" style={{ fontFamily: 'Andika, sans-serif' }}>
            Email Address
          </Typography>
        }
        name="email"
        type="email"
        autoComplete="email"
        autoFocus
        onChange={handleChange}
        InputProps={{ style: { fontFamily: 'Andika, sans-serif' } }}
        InputLabelProps={{ style: { fontFamily: 'Andika, sans-serif' } }}
        color="success"
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="password"
        label={
          <Typography variant="body1" style={{ fontFamily: 'Andika, sans-serif' }}>
            Password
          </Typography>
        }
        name="password"
        type="password"
        autoComplete="current-password"
        onChange={handleChange}
        InputProps={{ style: { fontFamily: 'Andika, sans-serif' } }}
        InputLabelProps={{ style: { fontFamily: 'Andika, sans-serif' } }}
        color="success"
      />
 
          {error ? (
            <Typography
              variant="body2"
              color="error"
              align="center"
              style={{ fontFamily: 'Andika, sans-serif', marginTop: "16px" }}
            >
              incorrect email or password
            </Typography>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="success"
            style={{ marginTop: "16px", fontFamily:'andika, sans-serif' }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
