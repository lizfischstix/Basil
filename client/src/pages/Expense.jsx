import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_EXPENSE } from "../utils/mutations";
import React from 'react';
import { TextField, Button, Container, Box, Grid, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import OutputIcon from '@mui/icons-material/Output';

const Expense = () => {
  const [addExpense, { error }] = useMutation(ADD_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    // Convert string to number
    formEntries.amount = +formEntries.amount;

    try {
      const { data } = await addExpense({ variables: { ...formEntries } });
    } catch (error) {
      console.error(error);
    }

    window.location.assign("/overview");
  };

  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  return (
    <Container maxWidth="sm" justifyContent="center">
      <Box mt={3} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
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
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                name="category"
              >
                <MenuItem value={"Home"}>Home</MenuItem>
                <MenuItem value={"Food & Dining"}>Food & Dining</MenuItem>
                <MenuItem value={"Health & Fitness"}>Health & Fitness</MenuItem>
                <MenuItem value={"Clothing"}>Clothing</MenuItem>
                <MenuItem value={"Education"}>Education</MenuItem>
                <MenuItem value={"Transportation"}>Transportation</MenuItem>
                <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                <MenuItem value={"Pet"}>Pet</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
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
  
            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Button
                variant="outlined"
                startIcon={<OutputIcon />}
                type="submit"
              >
                Add Expense
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
  );  
};

export default Expense;