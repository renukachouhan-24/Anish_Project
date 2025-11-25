import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';
import ajmfLogo from '../assets/AJMF.jpeg'; // Assuming you still use this logo

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <NavLink to="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
          <img src={ajmfLogo} alt="AJMF Logo" className={styles.logoImage} />
        </NavLink>

        {/* Hamburger Icon for Mobile - Position relative to .container */}
        {/* 'isMenuOpen' hone par ek alag class denge takki CSS me X icon ko sahi se position kar sakein */}
        <button className={`${styles.menuToggle} ${isMenuOpen ? styles.closeIcon : ''}`} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />} {/* Icon size thoda bada kiya */}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {/* Mobile menu ke andar, aapko logo aur close button ko bhi render karna hoga */}
          {isMenuOpen && ( // Only show when menu is open
            <div className={styles.mobileMenuHeader}>
              <NavLink to="/" className={styles.logo} onClick={toggleMenu}>
                <img src={ajmfLogo} alt="AJMF Logo" className={styles.logoImage} />
              </NavLink>
              {/* Close Button already handled by menuToggle */}
            </div>
          )}

          {/* Navigation Links */}
          <div className={styles.linksContainerMobile}> {/* Naya class naam */}
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
          </div>

          {/* CTA Container for Mobile */}
          <div className={styles.ctaContainerMobile}> {/* Naya class naam */}
            <NavLink to="/involved" className={`${styles.ctaButtonPrimary} ${styles.ctaNavLink}`} onClick={toggleMenu}>
              Get Involved
            </NavLink>
            <NavLink to="/success-stories" className={`${styles.ctaButtonSecondary} ${styles.ctaNavLink}`} onClick={toggleMenu}>
              Success Stories
            </NavLink>
            <NavLink to="/admissions" className={`${styles.applyButton} ${styles.ctaNavLink}`} onClick={toggleMenu}>
              Apply Now
            </NavLink>
          </div>
        </div>

        {/* Desktop Links and CTAs - Mobile par hide rahenge */}
        <div className={styles.linksContainerDesktop}> {/* Naya class naam */}
          <NavLink to="/" className={getNavLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            About Anish
          </NavLink>
          <NavLink to="/campus" className={getNavLinkClass}>
            Campus & Facilities
          </NavLink>
          <NavLink to="/programs" className={getNavLinkClass}>
            Our Programs
          </NavLink>
          <NavLink to="/student-campus" className={getNavLinkClass}>
            Student Led Campus
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact Us
          </NavLink>
        </div>

        <div className={styles.ctaContainerDesktop}> {/* Naya class naam */}
          <NavLink to="/involved" className={`${styles.ctaButtonPrimary} ${styles.ctaNavLink}`}>
            Get Involved
          </NavLink>
          <NavLink to="/success-stories" className={`${styles.ctaButtonSecondary} ${styles.ctaNavLink}`}>
            Success Stories
          </NavLink>
          <NavLink to="/admissions" className={`${styles.applyButton} ${styles.ctaNavLink}`}>
            Apply Now
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;