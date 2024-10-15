import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Hello from "../components/Hello";
import MakeExtraBar from "../components/graphs/extraGraph/extraGraph";
import { Grid, Paper, Box } from "@mui/material";
import Spinner from "../components/Spinner/index";


const Overview = () => {
  // Check if the user is logged in
  if (!Auth.loggedIn()) {
    return (
<>
 <Grid container justifyContent="space-around" sx={{ marginTop: 2 }}>
      <a href="/Login" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="success">
          Log In
        </Button>
      </a>
      <a href="/Signup" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="success">
          Sign Up
        </Button>
      </a>
    </Grid>
</>
    );
  }

  const addExpense = (event) => {
    event.preventDefault();
    window.location.assign("/expense");
  };

  const addIncome = (event) => {
    event.preventDefault();
    window.location.assign("/income");
  };

  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  // Handle loading state
  if (loading) {
    return <div>
      <Spinner/>
    </div>;
  }

  if (!data) {
    Auth.logout();
  }

  // User data is available
  const userInfo = data.me;

  const containerStyle = {
    border: "1px solid #ddd", // Add a border with a light gray color
    borderRadius: "8px", // Add rounded corners
    marginBottom: "20px", // Add some spacing between containers
    padding: "20px", // Add internal padding
    marginTop: "20px",
    background: "white",
    display: "flex",
    justifyContent: "center"
  };

  const buttoncontainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    gap: "50px",
  };
  

  return (
    <>
   
    <div className="text-center" id="hello" style={{containerStyle, fontFamily: 'andika, sans-serif'}}>
        <Hello userInfo={userInfo}  />
      </div>

      <div className="container" style={buttoncontainer}>
        <Button
          variant="outlined"
          color="success" 
          style={{ marginTop: "16px", fontFamily:'andika, sans-serif'}}
          startIcon={<KeyboardDoubleArrowUpIcon />}
          onClick={(event) => addIncome(event)}
        >
          Add Income
        </Button>
        <Button
          variant="outlined"
          color="success" 
          style={{ marginTop: "16px", fontFamily:'andika, sans-serif'}}
          startIcon={<KeyboardDoubleArrowDownIcon />}
          onClick={(event) => addExpense(event)}
        >
          Add Expense
        </Button>
      </div>
      <Grid
      container
      justifyContent="center"
      style={{ maxHeight: '50vh' }} 
    >
      <Paper elevation={24} style={{ width: '50%', padding: '16px' }}>
        <MakeExtraBar style={{ width:'100%', fontFamily:'andika, sans-serif' }} justifyContent='center' />
      </Paper>
    </Grid>

      

    </>
  );  
  
};

export default Overview;