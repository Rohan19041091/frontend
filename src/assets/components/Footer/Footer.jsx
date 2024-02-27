import React from 'react';
import './styles.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
     <div className='content'>
        <ul><strong>Categories</strong></ul>
        <ul>Hosting</ul>
        <ul>Data Center</ul>
        <ul>Robotic-Automation</ul>
     </div>
     <div className='content'>
     <ul><strong>Contact</strong></ul>
        <ul>Contact</ul>
        <ul>Privacy Policy</ul>
        <ul>Terms Of Service</ul>
        <ul>Categories</ul>
        <ul>About</ul>
     </div>
     <div className='content'>
        <ul>
        United States   &or;
        </ul>
     </div>
    </footer>
  );
};

export default Footer;
