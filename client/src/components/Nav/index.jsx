import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from 'react-router-dom';
import LoginRounded from '@mui/icons-material/LoginRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';

export default function Nav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      orientation="vertical" // Set the orientation to "vertical"
      aria-label="icon tabs example"
    >
      <Link to="/"><Tab icon={<HomeRoundedIcon />} aria-label="Home" /></Link>
      <Tab icon={<LoginRounded/>} aria-label="Log In" />
      <Tab icon={<SubscriptionsRoundedIcon />} aria-label="Sign Up " />
    </Tabs>
  );
}
