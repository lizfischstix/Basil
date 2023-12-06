import * as React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import { Tooltip } from '@mui/material';
import { green } from '@mui/material/colors';

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

      orientation="horizontal"
      aria-label="icon tabs"
      orientation="vertical"
      indicatorColor= {{color: green[900]}}
    >
      <Link to="/">
        <Tooltip title="Home" placement="bottom" arrow>
          <Tab
            icon={
              <EnergySavingsLeafIcon sx={{ color: green[900], fontSize: 30 }} />
            }
            aria-label="Home"
          />
        </Tooltip>
      </Link>

      {Auth.loggedIn() ? (
        <>
          <Link to="/overview">
            <Tooltip title="Dashboard" placement="bottom" arrow>
              {" "}
              <Tab
                icon={
                  <HomeRoundedIcon sx={{ color: green[900], fontSize: 30 }} />
                }
                aria-label="Overview"
              />
            </Tooltip>
          </Link>

          <Link to="/transaction">
            <Tooltip title="Transaction List" placement="bottom" arrow>
              <Tab
                icon={
                  <AssignmentRoundedIcon
                    sx={{ color: green[900], fontSize: 30 }}
                  />
                }
                aria-label="Transactions List"
              />
            </Tooltip>
          </Link>

          <Link to="/graphpage">
            <Tooltip title="Spending Graphs" placement="bottom" arrow>
              <Tab
                icon={
                  <AutoGraphRoundedIcon
                    sx={{ color: green[900], fontSize: 30 }}
                  />
                }
                aria-label="Transactions Graphs"
              />
            </Tooltip>
          </Link>

          <Link to="/home">
            <Tooltip title="Log Out" placement="bottom" arrow>
              <Tab
                icon={
                  <LoginRoundedIcon sx={{ color: green[900], fontSize: 30 }} />
                }
                aria-label="Home"
                onClick={logout}
              />
            </Tooltip>
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <Tooltip title="Log In" placement="bottom" arrow>
              {" "}
              <Tab
                icon={
                  <LoginRoundedIcon sx={{ color: green[900], fontSize: 30 }} />
                }
                aria-label="Log In"
              />
            </Tooltip>
          </Link>
          <Link to="/signup">
            <Tooltip title="Sign Up" placement="bottom" arrow>
              {" "}
              <Tab
                icon={
                  <AddBoxRoundedIcon sx={{ color: green[900], fontSize: 30 }} />
                }
                aria-label="Sign Up"
              />
            </Tooltip>
          </Link>
        </>
      )}
    </Tabs>
  );
}
