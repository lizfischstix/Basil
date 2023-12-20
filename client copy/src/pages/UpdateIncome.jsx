import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { UPDATE_INCOME } from "../utils/mutations";
import { QUERY_INCOME } from "../utils/queries";
import { useParams } from "react-router-dom";
import { TextField, Button, Container, Box, Grid } from "@mui/material";
import formatDateForDefaultValue from "../utils/dateFormate";
import InputIcon from '@mui/icons-material/Input';

const UpdateIncome = () => {
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  const { incomeId } = useParams();

  const { loading, data } = useQuery(QUERY_INCOME, { variables: { incomeId } });

  const [updateIncome, { error }] = useMutation(UPDATE_INCOME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    // Convert string to number
    formEntries.amount = +formEntries.amount;

    try {
      const { data } = await updateIncome({
        variables: { ...formEntries, incomeId },
      });
      window.location.assign("/transaction");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const incomeInfo = data.income;

  const date = formatDateForDefaultValue(incomeInfo.createdAt);

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
                  defaultValue={incomeInfo.description}
                  color="success"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Amount"
                  variant="outlined"
                  name="amount"
                  defaultValue={incomeInfo.amount}
                  color="success"
                />
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
                  startIcon={<InputIcon />}
                  type="submit"
                  color="success"
                >
                  Save Income
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

export default UpdateIncome;
