// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
// import styles from './Navbar.module.css';
// import ajmfLogo from '../assets/AJMF.jpeg'; // Assuming you still use this logo

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const getNavLinkClass = ({ isActive }) => {
//     return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.container}>

//         {/* Logo */}
//         <NavLink to="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
//           <img src={ajmfLogo} alt="AJMF Logo" className={styles.logoImage} />
//         </NavLink>

//         {/* Hamburger Icon for Mobile - Position relative to .container */}
//         {/* 'isMenuOpen' hone par ek alag class denge takki CSS me X icon ko sahi se position kar sakein */}
//         <button className={`${styles.menuToggle} ${isMenuOpen ? styles.closeIcon : ''}`} onClick={toggleMenu}>
//           {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />} {/* Icon size thoda bada kiya */}
//         </button>

//         {/* Mobile Menu Overlay */}
//         <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.menuOpen : ''}`}>
//           {/* Mobile menu ke andar, aapko logo aur close button ko bhi render karna hoga */}
//           {isMenuOpen && ( // Only show when menu is open
//             <div className={styles.mobileMenuHeader}>
//               <NavLink to="/" className={styles.logo} onClick={toggleMenu}>
//                 <img src={ajmfLogo} alt="AJMF Logo" className={styles.logoImage} />
//               </NavLink>
//               {/* Close Button already handled by menuToggle */}
//             </div>
//           )}

//           {/* Navigation Links */}
//           <div className={styles.linksContainerMobile}> {/* Naya class naam */}
//             <NavLink to="/" className={getNavLinkClass} end onClick={toggleMenu}>
//               Home
//             </NavLink>
//             <NavLink to="/about" className={getNavLinkClass} onClick={toggleMenu}>
//               About Anish
//             </NavLink>
//             <NavLink to="/campus" className={getNavLinkClass} onClick={toggleMenu}>
//               Campus & Facilities
//             </NavLink>
//             <NavLink to="/programs" className={getNavLinkClass} onClick={toggleMenu}>
//               Our Programs
//             </NavLink>
//             <NavLink to="/student-campus" className={getNavLinkClass} onClick={toggleMenu}>
//               Student Led Campus
//             </NavLink>
//             <NavLink to="/contact" className={getNavLinkClass} onClick={toggleMenu}>
//               Contact Us
//             </NavLink>
//           </div>

//           {/* CTA Container for Mobile */}
//           <div className={styles.ctaContainerMobile}> {/* Naya class naam */}
//             <NavLink to="/involved" className={`${styles.ctaButtonPrimary} ${styles.ctaNavLink}`} onClick={toggleMenu}>
//               Get Involved
//             </NavLink>
//             <NavLink to="/success-stories" className={`${styles.ctaButtonSecondary} ${styles.ctaNavLink}`} onClick={toggleMenu}>
//               Success Stories
//             </NavLink>
//             <NavLink to="/admissions" className={`${styles.applyButton} ${styles.ctaNavLink}`} onClick={toggleMenu}>
//               Apply Now
//             </NavLink>
//           </div>
//         </div>

//         {/* Desktop Links and CTAs - Mobile par hide rahenge */}
//         <div className={styles.linksContainerDesktop}> {/* Naya class naam */}
//           <NavLink to="/" className={getNavLinkClass} end>
//             Home
//           </NavLink>
//           <NavLink to="/about" className={getNavLinkClass}>
//             About Anish
//           </NavLink>
//           <NavLink to="/campus" className={getNavLinkClass}>
//             Campus & Facilities
//           </NavLink>
//           <NavLink to="/programs" className={getNavLinkClass}>
//             Our Programs
//           </NavLink>
//           <NavLink to="/student-campus" className={getNavLinkClass}>
//             Student Led Campus
//           </NavLink>
//           <NavLink to="/contact" className={getNavLinkClass}>
//             Contact Us
//           </NavLink>
//         </div>

//         <div className={styles.ctaContainerDesktop}> {/* Naya class naam */}
//           <NavLink to="/involved" className={`${styles.ctaButtonPrimary} ${styles.ctaNavLink}`}>
//             Get Involved
//           </NavLink>
//           <NavLink to="/success-stories" className={`${styles.ctaButtonSecondary} ${styles.ctaNavLink}`}>
//             Success Stories
//           </NavLink>
//           <NavLink to="/admissions" className={`${styles.applyButton} ${styles.ctaNavLink}`}>
//             Apply Now
//           </NavLink>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import styles from './Navbar.module.css';
import ajmfLogo from '../assets/AJMF.jpeg'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // For mobile dropdown toggle

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper for Mobile Dropdowns
  const toggleMobileDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // --- NAVIGATION DATA STRUCTURE ---
  const navLinks = [
    {
      label: 'Home',
      path: '/',
      dropdown: [
        { label: 'Mission & Trustee', path: '/mission' } ,
        { label: 'Past Initiatives', path: '/past-initiatives' } // You can create a /mission route later
      ]
    },
    {
      label: 'About Anish',
      path: '/about',
      dropdown: [] // No dropdown
    },
    {
      label: 'Academics',
      path: '#', // Not a page itself, just opens dropdown
      dropdown: [
        { label: 'Our Programs', path: '/programs' },
        { label: 'Student Led Campus', path: '/student-campus' },
        { label: 'A Day at Campus', path: '/day-at-campus' }
      ]
    },
    {
      label: 'Student Life',
      path: '#',
      dropdown: [
        { label: 'Gallery', path: '/gallery' },
        { label: 'Campus & Facilities', path: '/campus' }, // Moved here as requested
        { label: 'Success Stories', path: '/success-stories' }
      ]
    },
    {
      label: 'Contact Us',
      path: '/contact',
      dropdown: [
        { label: 'Get Involved', path: '/involved' },
        { label: 'Apply Now', path: '/admissions' }
      ]
    }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <NavLink to="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
          <img src={ajmfLogo} alt="AJMF Logo" className={styles.logoImage} />
        </NavLink>

        {/* Hamburger Icon */}
        <button className={`${styles.menuToggle} ${isMenuOpen ? styles.closeIcon : ''}`} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        {/* --- DESKTOP MENU --- */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link, index) => (
            <div key={index} className={styles.navItem}>
              {/* Main Link */}
              <NavLink 
                to={link.path} 
                className={({ isActive }) => isActive && link.path !== '#' ? `${styles.navLink} ${styles.active}` : styles.navLink}
                onClick={(e) => link.path === '#' && e.preventDefault()} // Prevent click if it's just a dropdown holder
              >
                {link.label} {link.dropdown.length > 0 && <FaChevronDown size={10} className={styles.chevron} />}
              </NavLink>

              {/* Dropdown Content */}
              {link.dropdown.length > 0 && (
                <div className={styles.dropdownMenu}>
                  {link.dropdown.map((subItem, subIndex) => (
                    <NavLink key={subIndex} to={subItem.path} className={styles.dropdownItem}>
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <div className={styles.mobileMenuHeader}>
             <NavLink to="/" onClick={toggleMenu}>
                <img src={ajmfLogo} alt="AJMF Logo" className={styles.logoImage} />
             </NavLink>
          </div>

          <div className={styles.mobileLinksContainer}>
            {navLinks.map((link, index) => (
              <div key={index} className={styles.mobileNavItem}>
                <div className={styles.mobileLinkHeader} onClick={() => link.dropdown.length > 0 ? toggleMobileDropdown(link.label) : toggleMenu()}>
                    {link.path !== '#' ? (
                         <NavLink to={link.path} className={styles.mobileNavLink} onClick={toggleMenu}>
                            {link.label}
                         </NavLink>
                    ) : (
                        <span className={styles.mobileNavLink}>{link.label}</span>
                    )}
                    {link.dropdown.length > 0 && <FaChevronDown size={12} />}
                </div>

                {/* Mobile Dropdown */}
                {link.dropdown.length > 0 && activeDropdown === link.label && (
                  <div className={styles.mobileDropdown}>
                    {link.dropdown.map((subItem, subIndex) => (
                      <NavLink 
                        key={subIndex} 
                        to={subItem.path} 
                        className={styles.mobileDropdownItem}
                        onClick={toggleMenu}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;