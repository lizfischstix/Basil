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
    <Container
      className="pt-3"
      component="main"
      maxWidth="xs"
      justifyContent="center"
      style={{ marginTop: "20px" }}
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
        <Typography  variant="h5" gutterBottom style={{fontFamily: 'andika, sans-serif'}}>
          Start Your Basil Budget Today
        </Typography>
        <form
          onSubmit={handleFormSubmit}
          style={{ width: "100%", marginTop: "16px" }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="firstName"
            label={ <Typography variant="body1" style={{ fontFamily: 'Andika, sans-serif' }}>
            First Name
            </Typography>
            }
            name="firstName"
            autoComplete="given-name"
            autoFocus
            onChange={handleChange}
            color="success"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="lastName"
            label={ <Typography variant="body1" style={{ fontFamily: 'Andika, sans-serif' }}>
            Last Name
            </Typography>
            }
            name="lastName"
            autoComplete="family-name"
            onChange={handleChange}
            color="success"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label={
              <Typography variant="body1" style={{ fontFamily: 'Andika, sans-serif' }}>
              Email
              </Typography>
            }
            name="email"
            type="email"
            autoComplete="email"
            onChange={handleChange}
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
            autoComplete="new-password"
            onChange={handleChange}
            color="success"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="success"
            style={{ marginTop: "16px", fontFamily:'andika, sans-serif'}}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Signup;
