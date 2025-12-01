import React from 'react';
import { Car, Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          {/* Company Info */}
          <div style={styles.footerSection}>
            <div style={styles.logoContainer}>
              <div style={styles.logoWrapper}>
                <img 
                  src="/logo.jpg" 
                  alt="Vuwa Driving School" 
                  style={styles.logo}
                />
              </div>
              <span style={styles.logoText}>Vuwa Driving School</span>
            </div>
            <p style={styles.footerText}>
              Professional driving education in Secunda, Devon, and Embalenhle. Building confident, skilled drivers for over 5 years.
            </p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} strokeWidth={2} />
              </a>
              <a href="#" style={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} strokeWidth={2} />
              </a>
              <a href="#" style={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <div style={styles.linksList}>
              <button 
                style={styles.footerLink}
                onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={(e) => e.target.style.color = '#73a9c2'}
                onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
              >
                Home
              </button>
              <button 
                style={styles.footerLink}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={(e) => e.target.style.color = '#73a9c2'}
                onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
              >
                About Us
              </button>
              <button 
                style={styles.footerLink}
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={(e) => e.target.style.color = '#73a9c2'}
                onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
              >
                Our Services
              </button>
              <button 
                style={styles.footerLink}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={(e) => e.target.style.color = '#73a9c2'}
                onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Services */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Our Services</h4>
            <div style={styles.linksList}>
              <span style={styles.serviceItem}>Learner's Classes</span>
              <span style={styles.serviceItem}>Driving Lessons</span>
              <span style={styles.serviceItem}>Code 8 License</span>
              <span style={styles.serviceItem}>Code 10 & 14</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Get In Touch</h4>
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <Phone size={18} color="#73a9c2" strokeWidth={2.5} />
                <a href="tel:0790659736" style={styles.contactLink}>
                  079 065 9736
                </a>
              </div>
              
              <div style={styles.contactItem}>
                <MapPin size={18} color="#73a9c2" strokeWidth={2.5} />
                <span style={styles.contactText}>
                  Secunda, Devon<br/>Embalenhle
                </span>
              </div>

              <div style={styles.contactItem}>
                <Mail size={18} color="#73a9c2" strokeWidth={2.5} />
                <span style={styles.contactText}>
                  Mon - Fri: 7AM - 5PM
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <div style={styles.bottomContent}>
            <p style={styles.copyright}>
              © {new Date().getFullYear()} Vuwa Driving School. All rights reserved.
            </p>
            <div style={styles.bottomLinks}>
              <span style={styles.bottomLink}>Privacy Policy</span>
              <span style={styles.divider}>•</span>
              <span style={styles.bottomLink}>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #1e2f3a 0%, #0f1a21 100%)',
    color: 'white',
    padding: '4rem 0 0',
    borderTop: '2px solid rgba(115, 169, 194, 0.3)'
  },
  container: {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '3rem',
    marginBottom: '3rem'
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
  logoWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    background: 'white',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(115, 169, 194, 0.2)',
    border: '2px solid rgba(115, 169, 194, 0.3)'
  },
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #73a9c2, #a8d8ea)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  footerText: {
    lineHeight: '1.6',
    color: '#cbd5e1',
    marginBottom: '1.5rem',
    fontSize: '0.9rem'
  },
  socialLinks: {
    display: 'flex',
    gap: '0.75rem'
  },
  socialLink: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    backgroundColor: 'rgba(115, 169, 194, 0.15)',
    border: '1px solid rgba(115, 169, 194, 0.3)',
    transition: 'all 0.3s ease',
    textDecoration: 'none'
  },
  footerTitle: {
    fontSize: '1.1rem',
    marginBottom: '1.2rem',
    fontWeight: '700',
    color: 'white'
  },
  linksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  footerLink: {
    color: '#cbd5e1',
    background: 'none',
    border: 'none',
    textAlign: 'left',
    padding: '0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  serviceItem: {
    color: '#cbd5e1',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem'
  },
  contactLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease'
  },
  contactText: {
    color: '#cbd5e1',
    margin: 0,
    fontSize: '0.9rem',
    lineHeight: '1.5',
    fontWeight: '500'
  },
  footerBottom: {
    borderTop: '1px solid rgba(115, 169, 194, 0.2)',
    padding: '2rem 0'
  },
  bottomContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  copyright: {
    color: '#94a3b8',
    margin: 0,
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  bottomLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  bottomLink: {
    color: '#94a3b8',
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    fontWeight: '500'
  },
  divider: {
    color: '#475569',
    fontSize: '0.85rem'
  }
};

export default Footer;