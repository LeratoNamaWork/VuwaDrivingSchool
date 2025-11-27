import React, { useState, useEffect } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            style={{
              ...styles.navLink,
              ...(activeSection === 'home' ? styles.activeNavLink : {})
            }} 
            onClick={() => scrollToSection('home')}
          >
            Home
            {activeSection === 'home' && <div style={styles.activeIndicator}></div>}
          </button>
          <button 
            style={{
              ...styles.navLink,
              ...(activeSection === 'about' ? styles.activeNavLink : {})
            }} 
            onClick={() => scrollToSection('about')}
          >
            About
            {activeSection === 'about' && <div style={styles.activeIndicator}></div>}
          </button>
          <button 
            style={{
              ...styles.navLink,
              ...(activeSection === 'services' ? styles.activeNavLink : {})
            }} 
            onClick={() => scrollToSection('services')}
          >
            Services
            {activeSection === 'services' && <div style={styles.activeIndicator}></div>}
          </button>
          <button 
            style={{
              ...styles.navLink,
              ...(activeSection === 'contact' ? styles.activeNavLink : {})
            }} 
            onClick={() => scrollToSection('contact')}
          >
            Contact
            {activeSection === 'contact' && <div style={styles.activeIndicator}></div>}
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
    width: '70px',
    height: '70px',
    borderRadius: '12px', // Changed from circle to rounded square
    objectFit: 'contain', // Changed from cover to contain to show full logo
    border: '2px solid #73a9c2',
    padding: '3px', // Added padding to ensure logo doesn't touch border
    backgroundColor: 'white' // Added white background to make logo stand out
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
    gap: '1.5rem',
    position: 'relative'
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
    fontWeight: '500',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px'
  },
  activeNavLink: {
    background: 'rgba(115, 169, 194, 0.2)',
    color: '#a8d8ea',
    fontWeight: '600'
  },
  activeIndicator: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#73a9c2',
    position: 'absolute',
    bottom: '2px',
    animation: 'pulse 2s infinite'
  }
};

// Add pulse animation for the active indicator
const styleSheet = document.styleSheets[0];
if (styleSheet) {
  const pulseAnimation = `
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.5); opacity: 0.7; }
      100% { transform: scale(1); opacity: 1; }
    }
  `;
  styleSheet.insertRule(pulseAnimation, styleSheet.cssRules.length);
}

export default Header;