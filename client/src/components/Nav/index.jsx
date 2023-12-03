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
import WysiwygRoundedIcon from '@mui/icons-material/WysiwygRounded';

export default function Nav({ isAuthenticated }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} orientation="vertical" aria-label="icon tabs">
      <Link to="/">
        <Tab icon={<HomeRoundedIcon />} aria-label="Home" />
      </Link>

      {isAuthenticated ? (
        <>
          <Link to="/logout">
            <Tab icon={<LoginRoundedIcon />} aria-label="Log Out" />
          </Link>
          <Link to="/overview">
            <Tab icon={<WysiwygRoundedIcon/>} aria-label="Overview" />
          </Link>
          <Tab icon={<AssignmentRoundedIcon />} aria-label="Transactions List" />
          <Tab icon={<AutoGraphRoundedIcon />} aria-label="Transactions Graphs" />
        </>
      ) : (
        <>
          <Link to="/login">
            <Tab icon={<LoginRoundedIcon />} aria-label="Log In" />
          </Link>
          <Link to="/signup">
            <Tab icon={<AddBoxRoundedIcon />} aria-label="Sign Up" />
          </Link>
        </>
      )}
    </Tabs>
  );
}
