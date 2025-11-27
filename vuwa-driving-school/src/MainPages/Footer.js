import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <div style={styles.logoContainer}>
              <img 
                src="/logo.jpg" 
                alt="Vuwa Driving School" 
                style={styles.logo}
              />
              <span style={styles.logoText}>Vuwa Driving School</span>
            </div>
            <p style={styles.footerText}>
              Professional driving lessons in Secunda, Devon, and Embalenhle.
            </p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" style={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001 12.017 0z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <button 
              style={styles.footerLink}
              onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
            >
              Home
            </button>
            <button 
              style={styles.footerLink}
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              About
            </button>
            <button 
              style={styles.footerLink}
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Services
            </button>
            <button 
              style={styles.footerLink}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </button>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Contact Info</h4>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📞</span>
              <a href="tel:0790659736" style={styles.contactLink}>
                079 065 9736
              </a>
            </div>
            
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span>
              <span style={styles.contactText}>Secunda, Devon, Embalenhle</span>
            </div>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} Vuwa Driving School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #1a2a35 0%, #0f1a21 100%)',
    color: 'white',
    padding: '3rem 0 1rem',
    borderTop: '3px solid #73a9c2'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '2rem'
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  logo: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #73a9c2'
  },
  logoText: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #73a9c2, #a8d8ea)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  footerText: {
    lineHeight: '1.6',
    opacity: 0.9,
    marginBottom: '1.5rem',
    fontSize: '0.95rem'
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem'
  },
  socialLink: {
    color: 'white',
    opacity: 0.8,
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  footerTitle: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#73a9c2'
  },
  footerLink: {
    color: 'white',
    background: 'none',
    border: 'none',
    textAlign: 'left',
    padding: '0.3rem 0',
    cursor: 'pointer',
    opacity: 0.9,
    transition: 'all 0.3s ease',
    fontSize: '0.95rem',
    marginBottom: '0.5rem'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginBottom: '1rem'
  },
  contactIcon: {
    fontSize: '1.1rem',
    color: '#73a9c2'
  },
  contactLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'color 0.3s ease'
  },
  contactText: {
    color: 'white',
    margin: 0,
    fontSize: '0.95rem',
    opacity: 0.9
  },
  footerBottom: {
    borderTop: '1px solid rgba(115, 169, 194, 0.3)',
    paddingTop: '1.5rem',
    textAlign: 'center'
  },
  copyright: {
    opacity: 0.8,
    margin: 0,
    fontSize: '0.9rem'
  }
};

export default Footer;