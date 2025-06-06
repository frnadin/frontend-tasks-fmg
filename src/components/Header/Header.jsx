import React from 'react';
import './Header.css';

const Header = ({ title }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
