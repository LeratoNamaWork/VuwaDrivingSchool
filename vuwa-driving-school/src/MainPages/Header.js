import React from 'react';

function Header() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <img 
            src="/logo.jpg" 
            alt="Vuwa Driving School" 
            style={styles.logo}
          />
          <span style={styles.logoText}>Vuwa Driving School</span>
        </div>
        
        <nav style={styles.nav}>
          <button 
            style={styles.navLink} 
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            style={styles.navLink} 
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            style={styles.navLink} 
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
          <button 
            style={styles.navLink} 
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: 'linear-gradient(135deg, #2d4a5a 0%, #1e2f3a 100%)',
    color: 'white',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    borderBottom: '2px solid #73a9c2'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  logo: {
    width: '70px', // Increased from 50px
    height: '70px', // Increased from 50px
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #73a9c2'
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #73a9c2, #a8d8ea)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  nav: {
    display: 'flex',
    gap: '1.5rem'
  },
  navLink: {
    color: 'white',
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.7rem 1.5rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    fontWeight: '500'
  }
};

export default Header;