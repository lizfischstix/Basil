import React from 'react';
import { Grid, Box } from '@mui/material';
import GraphDropdown from '../components/graphs/graphDropdown';
import Auth from "../utils/auth";

import MakeExtraBar from '../components/graphs/extraGraph/extraGraph';

const Graph = () => {
  // Check if the user is logged in
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }
  
  const containerStyle = {
    border: "1px solid #ddd", // Add a border with a light gray color
    borderRadius: "8px", // Add rounded corners
    marginBottom: "20px", // Add some spacing between containers
    padding: "20px", // Add internal padding
    marginTop: "20px",
    background: "white",
    height: "500px"
  };
  return (
    <>
      {/* <Box sx={{width: '100%'}} height={'100%'}> */}
      <Box sx={{ flexGrow: 1 }} justifyContent={"center"}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={9} sm={8}>
            <div id="graphs" style={containerStyle}>
              <GraphDropdown />
              
            </div>
          </Grid>
        </Grid>
      </Box>
      
      {/* </Box> */}
</>
  );
};

export default Graph;

