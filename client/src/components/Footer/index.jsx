
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    // Update the year when the component mounts
    updateYear();

    // Optionally, you can set up a timer or other triggers to update the year periodically
    // For example, update every 1000ms (1 second)
    const intervalId = setInterval(updateYear, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <p className='text-center'>&copy; {currentYear} Basil🌿. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
