import React from 'react';
import { Grid, Box } from '@mui/material';
import GraphDropdown from '../components/graphs/graphDropdown';



const Graph = () => {
  const containerStyle = {
    border: "1px solid #ddd", // Add a border with a light gray color
    borderRadius: "8px", // Add rounded corners
    marginBottom: "20px", // Add some spacing between containers
    padding: "20px", // Add internal padding
    marginTop: "20px",
    background: "white",
  };
  return (
    <>
        <Box sx={{ flexGrow: 1 }} justifyContent={"center"}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={5}>
              <div id="graphs" style={containerStyle}>
                <GraphDropdown />
              </div>
            </Grid>
          </Grid>
        </Box>
    </>
  );
};

export default Graph;

