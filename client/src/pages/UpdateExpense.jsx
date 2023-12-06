import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { UPDATE_EXPENSE } from "../utils/mutations";
import { QUERY_EXPENSE } from "../utils/queries";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import formatDateForDefaultValue from "../utils/dateFormate";
import InputIcon from '@mui/icons-material/Input';

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
      window.location.assign("/transaction");
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
      <Container
        maxWidth="sm"
        style={{ backgroundColor: "white", marginTop: "30px" }}
      >
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
                  color="success"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Amount"
                  variant="outlined"
                  name="amount"
                  defaultValue={expenseInfo.amount}
                  color="success"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" color="success">
                    Category
                  </InputLabel>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                    name="category"
                    defaultValue={expenseInfo.category}
                    color="success"
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
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label=""
                  variant="outlined"
                  type="date"
                  name="createdAt"
                  defaultValue={date}
                  color="success"
                />
              </Grid>

              <Grid
                item
                xs={15}
                style={{ marginBottom: "20px" }}
                container
                justifyContent="center"
              >
                <Button
                  variant="outlined"
                  type="submit"
                  color="success"
                  startIcon={<InputIcon />}
                >
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