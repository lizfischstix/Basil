import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="fixed-bottom">
      <p className='text-center'>&copy; {currentYear} Basil🌿. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

