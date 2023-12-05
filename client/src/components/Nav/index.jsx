import * as React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import { Tooltip } from '@mui/material';

import Auth from "../../utils/auth";

export default function Nav({ isAuthenticated }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   const logout = (event) => {
     event.preventDefault();
     Auth.logout();
   };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      orientation="vertical"
      aria-label="icon tabs"
    >
      <Link to="/">
      <Tooltip title='Home' placement='bottom' arrow><Tab icon={<HomeRoundedIcon />} aria-label="Home" /></Tooltip>
      </Link>

      {Auth.loggedIn() ? (
        <>
        
          <Link to="/home">
          <Tooltip title='Log Out' placement='bottom' arrow><Tab icon={<LoginRoundedIcon />} aria-label="Home" onClick={logout}/></Tooltip>
          </Link>
          
          <Link to="/overview">
          <Tooltip title='Dashboard' placement='bottom' arrow> <Tab icon={<SettingsRoundedIcon />} aria-label="Overview" /></Tooltip>
          </Link>
          
          <Link to="/transaction">
          <Tooltip title='Transaction List' placement='bottom' arrow> 
          <Tab icon={<AssignmentRoundedIcon />} aria-label="Transactions List"/></Tooltip>
          </Link>
          
          <Tooltip title='Spending Graphs' placement='bottom' arrow> <Tab
            icon={<AutoGraphRoundedIcon />}
            aria-label="Transactions Graphs"
          /></Tooltip>
        </>
      ) : (
        <>
          <Link to="/login">
          <Tooltip title='Log In' placement='bottom' arrow>  <Tab icon={<LoginRoundedIcon />} aria-label="Log In" /></Tooltip>
          </Link>
          <Link to="/signup">
          <Tooltip title='Sign Up' placement='bottom' arrow>  <Tab icon={<AddBoxRoundedIcon/>} aria-label="Sign Up" /></Tooltip>
          </Link>
        </>
      )}
    </Tabs>
  );
}