import React from 'react';

const headerStyle = {
  backgroundImage: 'url("https://cdna.artstation.com/p/assets/images/images/016/362/200/original/elizabeth-gross-acs-count-down-400px.gif?1551878609")', // Replace with your image URL
  backgroundSize: 'cover',
  color: 'white', // Set text color to contrast with the background
  textAlign: 'center',
  padding: '25px',
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <>
        <h1>🌿 💖 Basil 💖 🌿</h1>
        <div className="">
          <h4>Welcome to our budget tracker!</h4>
        </div>
      </>
    </div>
  );
};

export default Header;
