import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_INCOME } from "../utils/mutations";
import React from 'react';
import { TextField, Button, Container, Box, Grid } from '@mui/material';
import InputIcon from '@mui/icons-material/Input';

const Income = () => {
  const [addIncome, { error }] = useMutation(ADD_INCOME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    // Convert string to number
    formEntries.amount = +formEntries.amount;

    console.log(formEntries);

    try {
      const { data } = await addIncome({ variables: { ...formEntries } });
    } catch (error) {
      console.error(error);
    }

    window.location.assign("/overview");
  };

  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  return (
    <>
    <Container maxWidth="sm">
    <Box mt={3}>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              name="description"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Amount"
              variant="outlined"
              name="amount"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label=""
              variant="outlined"
              type="date"
              name="createdAt"
            />
          </Grid>

          <Grid item xs={15}>
            <Button  variant="outlined" startIcon={<InputIcon />} type="submit">
            Add Income
            </Button>
          </Grid>
        </Grid>
      </form>

      {error && (
        <Box mt={2} color="red">
          {error.message}
        </Box>
      )}
    </Box>
  </Container>
  </>
  );
};

export default Income;
