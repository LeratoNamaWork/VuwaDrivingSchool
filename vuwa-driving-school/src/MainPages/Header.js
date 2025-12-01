import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state for header style
      setIsScrolled(window.scrollY > 50);

      // Update active section
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
    <header style={{
      ...styles.header,
      ...(isScrolled ? styles.headerScrolled : {})
    }}>
      <div style={styles.container}>
        <div style={styles.logoContainer} onClick={() => scrollToSection('home')}>
          <div style={styles.logoWrapper}>
            <img 
              src="/logo.jpg" 
              alt="Vuwa Driving School" 
              style={styles.logo}
            />
          </div>
          <div style={styles.logoTextContainer}>
            <span style={styles.logoText}>Vuwa Driving School</span>
            <span style={styles.logoTagline}>Learn. Drive. Succeed.</span>
          </div>
        </div>
        
        <nav style={styles.nav}>
          {['home', 'about', 'services', 'contact'].map((section) => (
            <button 
              key={section}
              style={{
                ...styles.navLink,
                ...(activeSection === section ? styles.activeNavLink : {})
              }} 
              onClick={() => scrollToSection(section)}
              onMouseEnter={(e) => {
                if (activeSection !== section) {
                  e.target.style.background = 'rgba(115, 169, 194, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section) {
                  e.target.style.background = 'none';
                }
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && <div style={styles.activeIndicator}></div>}
            </button>
          ))}
        </nav>

        <button 
          style={styles.ctaButton}
          onClick={() => scrollToSection('contact')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(115, 169, 194, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(115, 169, 194, 0.3)';
          }}
        >
          <Car size={18} style={{ marginRight: '6px' }} />
          <span>Book Now</span>
        </button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: 'rgba(30, 47, 58, 0.95)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(115, 169, 194, 0.2)',
    transition: 'all 0.3s ease'
  },
  headerScrolled: {
    padding: '0.75rem 0',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    background: 'rgba(30, 47, 58, 0.98)'
  },
  container: {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  },
  logoWrapper: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    background: 'white',
    padding: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(115, 169, 194, 0.3)',
    border: '2px solid rgba(115, 169, 194, 0.3)',
    transition: 'all 0.3s ease'
  },
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  logoTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.15rem'
  },
  logoText: {
    fontSize: '1.3rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #73a9c2, #a8d8ea)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.02em'
  },
  logoTagline: {
    fontSize: '0.7rem',
    color: '#94a3b8',
    fontWeight: '500',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  },
  nav: {
    display: 'flex',
    gap: '0.5rem',
    position: 'relative'
  },
  navLink: {
    color: 'white',
    background: 'none',
    border: 'none',
    fontSize: '0.95rem',
    cursor: 'pointer',
    padding: '0.7rem 1.3rem',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    letterSpacing: '0.02em'
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
    bottom: '4px'
  },
  ctaButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #73a9c2 0%, #5c879b 100%)',
    color: 'white',
    border: 'none',
    padding: '0.7rem 1.5rem',
    fontSize: '0.95rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(115, 169, 194, 0.3)',
    letterSpacing: '0.02em'
  }
};

export default Header;