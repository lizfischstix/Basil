import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Container, TextField, Button, Typography, Paper, Link as MuiLink } from '@mui/material';

function Signup(props) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5" gutterBottom>
          ⭐ Signup ⭐
        </Typography>
        <form onSubmit={handleFormSubmit} style={{ width: '100%', marginTop: '16px' }}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Submit
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: '16px' }}>
          <MuiLink component={Link} to="/login">
            ← Go to Login
          </MuiLink>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Signup;
