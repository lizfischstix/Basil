import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { UPDATE_EXPENSE } from "../utils/mutations";
import { QUERY_EXPENSE } from "../utils/queries";
import { useParams } from "react-router-dom";
import { TextField, Button, Container, Box, Grid, Select, MenuItem } from "@mui/material";
import formatDateForDefaultValue from "../utils/dateFormate";

const UpdateExpense = () => {
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  const { expenseId } = useParams();

  const { loading, data } = useQuery(QUERY_EXPENSE, { variables: { expenseId } });

  const [updateExpense, { error }] = useMutation(UPDATE_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    // Convert string to number
    formEntries.amount = +formEntries.amount;

    try {
      const { data } = await updateExpense({
        variables: { ...formEntries, expenseId },
      });
      window.location.assign("/overview");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const expenseInfo = data.expense;

  const date = formatDateForDefaultValue(expenseInfo.createdAt);

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
                  defaultValue={expenseInfo.description}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Amount"
                  variant="outlined"
                  name="amount"
                  defaultValue={expenseInfo.amount}
                />
              </Grid>

              <Grid item xs={12}>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  name="category"
                  defaultValue={expenseInfo.category}
                >
                  <MenuItem value={"Home"}>Home</MenuItem>
                  <MenuItem value={"Food & Dining"}>Food & Dining</MenuItem>
                  <MenuItem value={"Health & Fitness"}>
                    Health & Fitness
                  </MenuItem>
                  <MenuItem value={"Clothing"}>Clothing</MenuItem>
                  <MenuItem value={"Education"}>Education</MenuItem>
                  <MenuItem value={"Transportation"}>Transportation</MenuItem>
                  <MenuItem value={"Entrertainment"}>Entrertainment</MenuItem>
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
                  defaultValue={date}
                />
              </Grid>

              <Grid item xs={15}>
                <Button variant="contained" color="primary" type="submit">
                  Save Expense
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

export default UpdateExpense;
