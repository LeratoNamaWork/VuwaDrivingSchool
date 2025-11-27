import React, { useState, useEffect } from 'react';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main style={styles.main}>
      {/* Hero Section with Background Image */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={{
            ...styles.heroTitle,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s'
          }}>Vuwa Driving School</h1>
          <p style={{
            ...styles.heroSubtitle,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.4s'
          }}>
            Professional Driving Lessons in Secunda, Devon & Embalenhle
          </p>
          <div style={{
            ...styles.heroStats,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.6s'
          }}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>100+</span>
              <span style={styles.statText}>Students Trained</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>98%</span>
              <span style={styles.statText}>Pass Rate</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>5+</span>
              <span style={styles.statText}>Years Experience</span>
            </div>
          </div>
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.05)';
              e.target.style.boxShadow = '0 15px 30px rgba(115, 169, 194, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(115, 169, 194, 0.4)';
            }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <span style={styles.buttonText}>Book Your Lesson Today</span>
            <span style={styles.buttonArrow}>→</span>
          </button>
        </div>
      </section>

      {/* About Section - IMPROVED LAYOUT */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.aboutContainer}>
          <div style={styles.aboutHeader}>
            <h2 style={styles.aboutMainTitle}>About Vuwa Driving School</h2>
            <p style={styles.aboutSubtitle}>
              Your Trusted Partner in Driving Excellence Since 2019
            </p>
          </div>
          
          <div style={styles.aboutContent}>
            <div style={styles.aboutImageSide}>
              <div style={styles.imageCard}>
                <img 
                  src="./image2.jpg" 
                  alt="Professional driving instructor teaching student"
                  style={styles.aboutImage}
                />
                <div style={styles.imageOverlay}></div>
              </div>
              <div style={styles.experienceBadge}>
                <div style={styles.badgeContent}>
                  <span style={styles.badgeNumber}>5+</span>
                  <span style={styles.badgeText}>Years Experience</span>
                </div>
              </div>

              {/* FEATURE BLOCKS MOVED HERE - BESIDE THE IMAGE */}
              <div style={styles.featuresGrid}>
                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>👨‍🏫</div>
                  <div>
                    <h4 style={styles.featureTitle}>Expert Instructors</h4>
                    <p style={styles.featureText}>Certified professionals with years of experience</p>
                  </div>
                </div>
                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>🛡️</div>
                  <div>
                    <h4 style={styles.featureTitle}>Safety First</h4>
                    <p style={styles.featureText}>Modern vehicles with dual controls</p>
                  </div>
                </div>
                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>📅</div>
                  <div>
                    <h4 style={styles.featureTitle}>Flexible Scheduling</h4>
                    <p style={styles.featureText}>Lessons tailored to your availability</p>
                  </div>
                </div>
                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>💯</div>
                  <div>
                    <h4 style={styles.featureTitle}>High Success Rate</h4>
                    <p style={styles.featureText}>98% first-time pass rate</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={styles.aboutTextSide}>
              <div style={styles.aboutCard}>
                <h3 style={styles.aboutCardTitle}>Our Story</h3>
                <p style={styles.aboutCardText}>
                  For over <strong>5 years</strong>, Vuwa Driving School has been the premier choice for professional driving education in Secunda, Devon, and Embalenhle. Founded with a passion for road safety and student success, we've helped hundreds of students become confident, skilled drivers.
                </p>
                
                <div style={styles.missionVision}>
                  <div style={styles.missionCard}>
                    <div style={styles.missionIcon}>🎯</div>
                    <h4 style={styles.missionTitle}>Our Mission</h4>
                    <p style={styles.missionText}>To provide exceptional driving education that empowers students with lifelong safe driving skills</p>
                  </div>
                  <div style={styles.visionCard}>
                    <div style={styles.visionIcon}>⭐</div>
                    <h4 style={styles.visionTitle}>Our Vision</h4>
                    <p style={styles.visionText}>To be the most trusted driving school in Mpumalanga, known for excellence and student success</p>
                  </div>
                </div>

                <div style={styles.achievements}>
                  <div style={styles.achievement}>
                    <span style={styles.achievementNumber}>1000+</span>
                    <span style={styles.achievementText}>Lessons Taught</span>
                  </div>
                  <div style={styles.achievement}>
                    <span style={styles.achievementNumber}>98%</span>
                    <span style={styles.achievementText}>Pass Rate</span>
                  </div>
                  <div style={styles.achievement}>
                    <span style={styles.achievementNumber}>50+</span>
                    <span style={styles.achievementText}>5-Star Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.servicesSection}>
        <div style={styles.servicesContainer}>
          <div style={styles.servicesHeader}>
            <h2 style={styles.servicesMainTitle}>Our Driving Programs</h2>
            <p style={styles.servicesSubtitle}>
              Comprehensive driving courses designed for all skill levels and license codes
            </p>
          </div>
          
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIconContainer}>
                <div style={styles.serviceIcon}>📝</div>
              </div>
              <h3 style={styles.serviceTitle}>Learner's Classes</h3>
              <p style={styles.serviceDescription}>
                Comprehensive theoretical classes covering road signs, rules, and safe driving principles.
              </p>
              <div style={styles.serviceFeatures}>
                <span style={styles.featureTag}>Road Signs</span>
                <span style={styles.featureTag}>Traffic Rules</span>
                <span style={styles.featureTag}>Test Prep</span>
                <span style={styles.featureTag}>Study Materials</span>
              </div>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconContainer}>
                <div style={styles.serviceIcon}>🚗</div>
              </div>
              <h3 style={styles.serviceTitle}>Driving Lessons</h3>
              <p style={styles.serviceDescription}>
                Practical driving lessons for all skill levels, from beginners to experienced drivers.
              </p>
              <div style={styles.serviceFeatures}>
                <span style={styles.featureTag}>Beginner to Advanced</span>
                <span style={styles.featureTag}>Manual & Automatic</span>
                <span style={styles.featureTag}>City & Highway</span>
                <span style={styles.featureTag}>Parking Techniques</span>
              </div>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconContainer}>
                <div style={styles.serviceIcon}>📋</div>
              </div>
              <h3 style={styles.serviceTitle}>Code 8 License</h3>
              <p style={styles.serviceDescription}>
                Complete training for Code 8 licenses including cars, bakkies, and minibuses.
              </p>
              <div style={styles.serviceFeatures}>
                <span style={styles.featureTag}>Light Vehicles</span>
                <span style={styles.featureTag}>Comprehensive Training</span>
                <span style={styles.featureTag}>Test Preparation</span>
                <span style={styles.featureTag}>Vehicle Provided</span>
              </div>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconContainer}>
                <div style={styles.serviceIcon}>🚛</div>
              </div>
              <h3 style={styles.serviceTitle}>Code 10 & 14</h3>
              <p style={styles.serviceDescription}>
                Professional heavy vehicle training for Code 10 and Code 14 licenses.
              </p>
              <div style={styles.serviceFeatures}>
                <span style={styles.featureTag}>Heavy Vehicles</span>
                <span style={styles.featureTag}>Professional Training</span>
                <span style={styles.featureTag}>Load Handling</span>
                <span style={styles.featureTag}>Career Prep</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Lighter Background */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactContainer}>
          <h2 style={styles.contactMainTitle}>Start Your Driving Journey</h2>
          <p style={styles.contactSubtitle}>
            Contact us today to schedule your first lesson or get more information
          </p>
          
          <div style={styles.contactContent}>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <div style={styles.blueIcon}>📞</div>
                </div>
                <div>
                  <h4 style={styles.contactTitle}>Call Us</h4>
                  <a href="tel:0790659736" style={styles.contactLink}>079 065 9736</a>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <div style={styles.blueIcon}>📍</div>
                </div>
                <div>
                  <h4 style={styles.contactTitle}>Areas We Serve</h4>
                  <p style={styles.contactText}>Secunda, Devon, Embalenhle</p>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <div style={styles.blueIcon}>🕐</div>
                </div>
                <div>
                  <h4 style={styles.contactTitle}>Operating Hours</h4>
                  <p style={styles.contactText}>
                    Monday - Friday: 7:00 AM - 5:00 PM<br/>
                    Weekend: By appointment
                  </p>
                </div>
              </div>
            </div>
            
            <div style={styles.contactForm}>
              <form style={styles.form}>
                <div style={styles.formRow}>
                  <input type="text" placeholder="Full Name" style={styles.input} required />
                  <input type="tel" placeholder="Phone Number" style={styles.input} required />
                </div>
                <select style={styles.select} required>
                  <option value="">Select Service</option>
                  <option value="learners">Learner's Classes</option>
                  <option value="lessons">Driving Lessons</option>
                  <option value="code8">Code 8 License</option>
                  <option value="code10">Code 10 License</option>
                  <option value="code14">Code 14 License</option>
                </select>
                <textarea placeholder="Your Message or Preferred Schedule" rows="4" style={styles.textarea} required></textarea>
                <button 
                  type="submit" 
                  style={styles.submitButton}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.02)';
                    e.target.style.boxShadow = '0 15px 30px rgba(115, 169, 194, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 8px 20px rgba(115, 169, 194, 0.4)';
                  }}
                >
                  <span style={styles.buttonText}>Send Enrollment Request</span>
                  <span style={styles.buttonArrow}>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  main: {
    flex: 1,
    width: '100%',
    overflowX: 'hidden',
    fontFamily: "'Arial', sans-serif"
  },
  
  // Hero Section - INCREASED HEIGHT
  hero: {
    background: 'linear-gradient(135deg, rgba(69, 101, 116, 0.9) 0%, rgba(58, 85, 97, 0.9) 50%, rgba(81, 118, 136, 0.9) 100%)',
    color: 'white',
    padding: '5rem 0', // Increased padding
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '75vh', // Increased from 70vh to 75vh
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/image1.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(8px) brightness(0.7)',
    zIndex: 1
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    width: '100%',
    padding: '0 2rem'
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
    background: 'linear-gradient(135deg, #fff, #e0f7ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    marginBottom: '2.5rem',
    opacity: 0.95,
    fontWeight: '300',
    textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  heroStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '2.5rem'
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '15px',
    border: '1px solid rgba(255,255,255,0.2)',
    minWidth: '140px',
    backdropFilter: 'blur(10px)'
  },
  statNumber: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
    color: 'white'
  },
  statText: {
    fontSize: '1rem',
    opacity: 0.9,
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    fontWeight: '500'
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #73a9c2 0%, #5c879b 100%)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 2.5rem',
    fontSize: '1.1rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 25px rgba(115, 169, 194, 0.4)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    margin: '0 auto'
  },
  buttonText: {
    position: 'relative',
    zIndex: 2
  },
  buttonArrow: {
    position: 'relative',
    zIndex: 2,
    transition: 'transform 0.3s ease',
    fontSize: '1.2rem'
  },

  // About Section - IMPROVED LAYOUT
  aboutSection: {
    backgroundColor: '#f8fafc',
    padding: '5rem 0', // Reduced padding to remove white space
    width: '100%'
  },
  aboutContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  aboutHeader: {
    textAlign: 'center',
    marginBottom: '3rem' // Reduced margin
  },
  aboutMainTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#1e2f3a',
    background: 'linear-gradient(135deg, #1e2f3a, #73a9c2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  aboutSubtitle: {
    fontSize: '1.3rem',
    color: '#6898af',
    fontWeight: '300'
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: '45% 55%',
    gap: '3rem', // Reduced gap
    alignItems: 'start'
  },
  aboutImageSide: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem' // Space between image and features
  },
  imageCard: {
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
    position: 'relative',
    marginBottom: '0' // Remove bottom margin
  },
  aboutImage: {
    width: '100%',
    height: '450px', // Slightly reduced height
    objectFit: 'cover',
    display: 'block'
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(115, 169, 194, 0.1), rgba(30, 47, 58, 0.2))'
  },
  experienceBadge: {
    position: 'absolute',
    bottom: '-20px',
    right: '-20px',
    background: 'linear-gradient(135deg, #73a9c2, #5c879b)',
    borderRadius: '20px',
    padding: '1.5rem',
    boxShadow: '0 15px 30px rgba(115, 169, 194, 0.4)',
    color: 'white'
  },
  badgeContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem'
  },
  badgeNumber: {
    fontSize: '2rem',
    fontWeight: 'bold'
  },
  badgeText: {
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  // FEATURE GRID - MOVED BESIDE IMAGE
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginTop: '0' // No top margin since it's right below image
  },
  featureCard: {
    backgroundColor: 'white',
    padding: '1.2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
    border: '1px solid #f1f5f9',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.8rem',
    transition: 'transform 0.3s ease'
  },
  featureIcon: {
    fontSize: '1.8rem',
    marginTop: '0.2rem',
    flexShrink: 0
  },
  featureTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#1e2f3a',
    marginBottom: '0.3rem'
  },
  featureText: {
    fontSize: '0.85rem',
    color: '#64748b',
    lineHeight: '1.3',
    margin: 0
  },
  aboutTextSide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  aboutCard: {
    backgroundColor: 'white',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0'
  },
  aboutCardTitle: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#1e2f3a',
    fontWeight: 'bold'
  },
  aboutCardText: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#475569',
    marginBottom: '2rem'
  },
  missionVision: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  missionCard: {
    padding: '1.5rem',
    backgroundColor: '#f0f7ff',
    borderRadius: '15px',
    borderLeft: '4px solid #73a9c2'
  },
  visionCard: {
    padding: '1.5rem',
    backgroundColor: '#fff7ed',
    borderRadius: '15px',
    borderLeft: '4px solid #f59e0b'
  },
  missionIcon: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  visionIcon: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  missionTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1e2f3a',
    marginBottom: '0.5rem'
  },
  visionTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1e2f3a',
    marginBottom: '0.5rem'
  },
  missionText: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.5'
  },
  visionText: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.5'
  },
  achievements: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem'
  },
  achievement: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  achievementNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#73a9c2',
    marginBottom: '0.3rem'
  },
  achievementText: {
    fontSize: '0.8rem',
    color: '#64748b',
    fontWeight: '500'
  },

  // Services Section
  servicesSection: {
    backgroundColor: '#0f172a',
    padding: '5rem 0',
    width: '100%'
  },
  servicesContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  servicesHeader: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  servicesMainTitle: {
    fontSize: '2.8rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: 'white'
  },
  servicesSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '0',
    color: '#cbd5e1',
    fontWeight: '300'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem'
  },
  serviceCard: {
    backgroundColor: '#1e293b',
    padding: '2.5rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
    border: '2px solid #334155'
  },
  serviceIconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    border: '2px solid #73a9c2'
  },
  serviceIcon: {
    fontSize: '2.2rem',
    color: '#73a9c2'
  },
  serviceTitle: {
    fontSize: '1.4rem',
    color: 'white',
    marginBottom: '1rem',
    fontWeight: 'bold'
  },
  serviceDescription: {
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontSize: '1rem'
  },
  serviceFeatures: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center'
  },
  featureTag: {
    backgroundColor: '#73a9c2',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '500'
  },

  // Contact Section - Lighter Background
  contactSection: {
    backgroundColor: '#f1f5f9',
    padding: '5rem 0',
    width: '100%'
  },
  contactContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  contactMainTitle: {
    fontSize: '2.8rem',
    textAlign: 'center',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#1e2f3a'
  },
  contactSubtitle: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#64748b'
  },
  contactContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    borderLeft: '4px solid #73a9c2',
    boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
    transition: 'transform 0.3s ease'
  },
  contactIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  blueIcon: {
    fontSize: '2rem',
    color: '#73a9c2',
    backgroundColor: '#f0f7ff',
    borderRadius: '50%',
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 20px rgba(115, 169, 194, 0.2)'
  },
  contactTitle: {
    fontSize: '1.3rem',
    color: '#1e2f3a',
    marginBottom: '0.5rem',
    fontWeight: 'bold'
  },
  contactLink: {
    fontSize: '1.4rem',
    color: '#73a9c2',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  contactText: {
    color: '#475569',
    margin: 0,
    lineHeight: '1.6',
    fontSize: '1rem'
  },
  contactForm: {
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  },
  input: {
    padding: '1rem 1.2rem',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '1rem',
    backgroundColor: 'white',
    color: '#1e2f3a',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  select: {
    padding: '1rem 1.2rem',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '1rem',
    backgroundColor: 'white',
    color: '#1e2f3a',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  textarea: {
    padding: '1rem 1.2rem',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '1rem',
    backgroundColor: 'white',
    color: '#1e2f3a',
    resize: 'vertical',
    minHeight: '120px',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease'
  },
  submitButton: {
    background: 'linear-gradient(135deg, #73a9c2 0%, #5c879b 100%)',
    color: 'white',
    border: 'none',
    padding: '1.3rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '1rem',
    boxShadow: '0 8px 20px rgba(115, 169, 194, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  }
};

export default HomePage;