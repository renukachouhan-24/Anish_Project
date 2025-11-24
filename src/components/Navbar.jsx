import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Bars for open, Times for close

// CSS Module ko import karein
import styles from './Navbar.module.css';

// Logo import karein
import ajmfLogo from '../assets/AJMF.jpeg';

function Navbar() {
  // State to track the mobile menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Active/Inactive class set karne ke liye function
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <nav className={styles.navbar}>

      <div className={styles.container}>

        {/* Logo */}
        <NavLink to="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          {/* Logo Image */}
          <img src={ajmfLogo} alt="AJMF Logo" className={styles.logoImage} />
        </NavLink>

        {/* Hamburger/Close Button (Mobile only) */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
          {/* Show FaTimes (X) when open, FaBars (Hamburger) when closed */}
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links - Mobile visibility based on isOpen state */}
        <div className={`${styles.linksContainer} ${isOpen ? styles.isOpen : ''}`}>

          {/* Nav Links */}
          <NavLink to="/" className={getNavLinkClass} end onClick={toggleMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className={getNavLinkClass} onClick={toggleMenu}>
            About Anish
          </NavLink>

          <NavLink to="/campus" className={getNavLinkClass} onClick={toggleMenu}>
            Campus & Facilities
          </NavLink>

          <NavLink to="/programs" className={getNavLinkClass} onClick={toggleMenu}>
            Our Programs
          </NavLink>

          <NavLink to="/student-campus" className={getNavLinkClass} onClick={toggleMenu}>
            Student Led Campus
          </NavLink>

          <NavLink to="/contact" className={getNavLinkClass} onClick={toggleMenu}>
            Contact Us
          </NavLink>
        <div className={styles.ctaContainer}>
          <NavLink
            to="/involved"
            className={`${styles.ctaButtonPrimary} ${styles.ctaNavLink}`}
          >
            Get Involved
          </NavLink>
          <NavLink
            to="/success-stories"
            className={`${styles.ctaButtonSecondary} ${styles.ctaNavLink}`}
          >
            Success Stories
          </NavLink>

          <NavLink
            to="/admissions"
            className={`${styles.applyButton} ${styles.ctaNavLink}`}
          >
            Apply Now
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;