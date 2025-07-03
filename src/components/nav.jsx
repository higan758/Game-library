import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaGamepad } from 'react-icons/fa';

const Nav = () => {
  const [active, setActive] = useState('Home');
  const [hovered, setHovered] = useState(null);

  const styles = {
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 30px',
      background: 'linear-gradient(to right, #0f172a, #43166d)',
      color: '#fff',
      fontFamily: 'sans-serif',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#f472b6',
    },
    logoIcon: {
      background: '#ec4899',
      color: '#fff',
      borderRadius: '10px',
      padding: '6px',
      marginRight: '10px',
      fontSize: '1.3rem',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
      fontSize: '0.95rem',
      cursor: 'pointer',
      userSelect: 'none',
    },
    linkGroup: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: '1.2',
    },
    activeLink: {
      border: '1px solid #9333ea',
      padding: '5px 12px',
      borderRadius: '8px',
      color: '#fff',
      background: 'transparent',
    },
    inactiveLink: {
      color: '#ccc',
      background: 'transparent',
      padding: '5px 12px',
      borderRadius: '8px',
      border: 'none',
      transition: 'background-color 0.3s, color 0.3s',
    },
    hoverEffect: {
      background: 'rgba(147, 51, 234, 0.3)', // soft purple background on hover
      color: '#fff',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      padding: '6px 12px',
      marginLeft: '20px',
    },
    searchInput: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#fff',
      paddingLeft: '10px',
      width: '150px',
    },
    icons: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      fontSize: '1.2rem',
      color: '#fff',
      marginLeft: '20px',
    },
  };

  // Compose style based on active and hover state
  const getLinkStyle = (name) => {
    let style = name === active ? { ...styles.activeLink } : { ...styles.inactiveLink };

    if (hovered === name && name !== active) {
      style = { ...style, ...styles.hoverEffect };
    }

    return style;
  };

  // Helper wrapper for all clickable links
  const NavItem = ({ name, children, isGroup = false }) => {
    const baseStyle = isGroup ? styles.linkGroup : {};
    return (
      <div
        style={{ ...baseStyle, ...getLinkStyle(name) }}
        onClick={() => setActive(name)}
        onMouseEnter={() => setHovered(name)}
        onMouseLeave={() => setHovered(null)}
      >
        {children}
      </div>
    );
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <FaGamepad style={styles.logoIcon} href="/Home" />
        GameVault
      </div>

     <div style={styles.navLinks}>
      <NavItem name="Home" href="/Home">
        Home
      </NavItem>

      <NavItem name="Browse Games" href="/" >
        <span>Browse Games</span>
      </NavItem>

      <NavItem name="New Releases" href="/" >
        <span>New Releases</span>
      </NavItem>

      <NavItem name="Categories" href="/">
        Categories
      </NavItem>

      <NavItem name="Deals" href="/">
        Deals
      </NavItem>

      <NavItem name="Community" href="/Community">
        Community
      </NavItem>
    </div>


      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search games..."
            style={styles.searchInput}
          />
        </div>
        <div style={styles.icons}>
          <FaHeart />
          <FaShoppingCart />
          <FaUser />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
