// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';

// export default function AccessibleTabs1() {
//   const [value, setValue] = React.useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Tabs
//         onChange={handleChange}
//         value={value}
//         aria-label="Tabs where selection follows focus"
//         selectionFollowsFocus
//       >
//        <Link to="/login"><Tab label="Log In"/> </Link>
//        <Link to="/signup"><Tab label="Sign Up"/> </Link>
//         <Link to="/" <Tab label="Item Three" />
//       </Tabs>
//     </Box>
//   );
// }