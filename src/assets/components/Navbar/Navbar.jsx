import React from 'react';
import './Navbar.css'; // Import CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <input type="text" placeholder="Search..."  className="center-input" /> {/* Add a class to the input field */}
        </li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Website Builders</a></li>
        <li><a href="#">Today's deals</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
