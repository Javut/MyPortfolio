import React from 'react';
import '../assets/styles/Navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Nick</a>
        </li>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>About me</a>
        </li>
        <li>
          <a href='/'>Projects</a>
        </li>
        <li>
          <a href='/'>Skills</a>
        </li>
        <li>
          <a href='/'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
