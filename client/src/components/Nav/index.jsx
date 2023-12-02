import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

export default function Nav({ isAuthenticated }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    { isAuthenticated ? (
    <Tabs value = { value } onChange = { handleChange } orientation = "vertical" aria- label= "icon tabs" >
    <Tab icon={<HomeRoundedIcon />} aria-label="Home" />
      
    ) : (
    <Tab icon={<LoginRoundedIcon />} aria-label="Log In" />
  )
}
    </Tabs >
  );
}

