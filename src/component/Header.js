import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">PANKAJ DOLEY</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#family">Family</a>
        <a href="#education">Education</a>
        <a href="#rewards">Rewards</a>
        <a href="#contributions">Contributions</a>
      </nav>

      <div className="social-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
