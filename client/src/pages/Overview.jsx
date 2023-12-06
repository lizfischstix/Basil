import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Button from "@mui/material/Button";
import InputIcon from "@mui/icons-material/Input";
import OutputIcon from "@mui/icons-material/Output";
import Hello from "../components/Hello";

const Overview = () => {
  // Check if the user is logged in
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
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
    // You can use loading skeletons or placeholders here
    return <div>Loading...</div>;
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
    <div className="text-center" id="hello" style={containerStyle}>
        <Hello userInfo={userInfo} />
      </div>

      <div className="container" style={buttoncontainer}>
        <Button
          variant="outlined"
          color="success" 
          startIcon={<InputIcon />}
          onClick={(event) => addIncome(event)}
        >
          Add Income
        </Button>
        <Button
          variant="outlined"
          color="success" 
          startIcon={<OutputIcon />}
          onClick={(event) => addExpense(event)}
        >
          Add Expense
        </Button>
      </div>

    </>
  );  
  
};

export default Overview;
