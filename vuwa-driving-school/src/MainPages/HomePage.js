import React, { useState, useEffect } from 'react';
import { Car, Users, Award, Clock, Phone, MapPin, Calendar, CheckCircle, Shield, Target, Star, Send, TrendingUp } from 'lucide-react';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main style={styles.main}>
      {/* Hero Section - Redesigned */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s'
          }}>
            <h1 style={styles.heroTitle}>
              Learn to Drive with<br/>
              <span style={styles.heroTitleAccent}>Vuwa Driving School</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Professional driving education in Secunda, Devon & Embalenhle
            </p>
          </div>
          
          <div style={{
            ...styles.heroStats,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.4s'
          }}>
            <div style={styles.statCard}>
              <div style={styles.statIconBox}>
                <Users size={28} color="#73a9c2" strokeWidth={2.5} />
              </div>
              <div style={styles.statInfo}>
                <span style={styles.statNumber}>100+</span>
                <span style={styles.statLabel}>Students</span>
              </div>
            </div>
            
            <div style={styles.statCard}>
              <div style={styles.statIconBox}>
                <Award size={28} color="#73a9c2" strokeWidth={2.5} />
              </div>
              <div style={styles.statInfo}>
                <span style={styles.statNumber}>98%</span>
                <span style={styles.statLabel}>Pass Rate</span>
              </div>
            </div>
            
            <div style={styles.statCard}>
              <div style={styles.statIconBox}>
                <Clock size={28} color="#73a9c2" strokeWidth={2.5} />
              </div>
              <div style={styles.statInfo}>
                <span style={styles.statNumber}>5+</span>
                <span style={styles.statLabel}>Years</span>
              </div>
            </div>
          </div>
          
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.02)';
              e.target.style.boxShadow = '0 15px 40px rgba(115, 169, 194, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(115, 169, 194, 0.3)';
            }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Book Your First Lesson</span>
            <Car size={20} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>About Us</div>
            <h2 style={styles.sectionTitle}>About Vuwa Driving School</h2>
            <p style={styles.sectionSubtitle}>
              Your Trusted Partner in Driving Excellence Since 2019
            </p>
          </div>
          
          <div style={styles.aboutContent}>
            <div style={styles.aboutImageSide}>
              <div style={styles.imageWrapper}>
                <img 
                  src="./image2.jpg" 
                  alt="Professional driving instructor"
                  style={styles.aboutImage}
                />
                <div style={styles.imageGradient}></div>
              </div>

              {/* Feature Grid Below Image */}
              <div style={styles.featuresGrid}>
                <div style={styles.featureBox}>
                  <div style={styles.featureIconBox}>
                    <Users size={24} color="#73a9c2" strokeWidth={2.5} />
                  </div>
                  <h4 style={styles.featureTitle}>Expert Instructors</h4>
                  <p style={styles.featureText}>Certified professionals with years of experience</p>
                </div>
                
                <div style={styles.featureBox}>
                  <div style={styles.featureIconBox}>
                    <Shield size={24} color="#73a9c2" strokeWidth={2.5} />
                  </div>
                  <h4 style={styles.featureTitle}>Safety First</h4>
                  <p style={styles.featureText}>Modern vehicles with dual controls</p>
                </div>
                
                <div style={styles.featureBox}>
                  <div style={styles.featureIconBox}>
                    <Calendar size={24} color="#73a9c2" strokeWidth={2.5} />
                  </div>
                  <h4 style={styles.featureTitle}>Flexible Scheduling</h4>
                  <p style={styles.featureText}>Lessons tailored to your availability</p>
                </div>
                
                <div style={styles.featureBox}>
                  <div style={styles.featureIconBox}>
                    <Award size={24} color="#73a9c2" strokeWidth={2.5} />
                  </div>
                  <h4 style={styles.featureTitle}>High Success Rate</h4>
                  <p style={styles.featureText}>98% first-time pass rate</p>
                </div>
              </div>
            </div>
            
            <div style={styles.aboutTextSide}>
              <div style={styles.aboutDescription}>
                <h3 style={styles.aboutHeading}>Our Story</h3>
                <p style={styles.aboutText}>
                  For over <strong>5 years</strong>, Vuwa Driving School has been the premier choice for professional driving education in Secunda, Devon, and Embalenhle. Founded with a passion for road safety and student success, we've helped hundreds of students become confident, skilled drivers.
                </p>
                <p style={styles.aboutText}>
                  Our certified instructors use modern teaching methods and well-maintained vehicles to ensure you receive the highest quality education. We're committed to your success from your first lesson to passing your driving test.
                </p>
              </div>

              {/* Mission and Vision */}
              <div style={styles.missionVisionContainer}>
                <div style={styles.missionCard}>
                  <div style={styles.missionHeader}>
                    <div style={styles.missionIconBox}>
                      <Target size={28} color="#73a9c2" strokeWidth={2.5} />
                    </div>
                    <h4 style={styles.missionTitle}>Our Mission</h4>
                  </div>
                  <p style={styles.missionText}>
                    To provide exceptional driving education that empowers students with lifelong safe driving skills and confidence on the road.
                  </p>
                </div>

                <div style={styles.visionCard}>
                  <div style={styles.visionHeader}>
                    <div style={styles.visionIconBox}>
                      <TrendingUp size={28} color="#73a9c2" strokeWidth={2.5} />
                    </div>
                    <h4 style={styles.visionTitle}>Our Vision</h4>
                  </div>
                  <p style={styles.visionText}>
                    To be the most trusted driving school in Mpumalanga, known for excellence, professionalism, and student success.
                  </p>
                </div>
              </div>

              {/* Achievement Stats */}
              <div style={styles.statsRow}>
                <div style={styles.statBox}>
                  <CheckCircle size={20} color="white" strokeWidth={2.5} />
                  <div>
                    <span style={styles.statBoxNumber}>1000+</span>
                    <span style={styles.statBoxLabel}>Lessons Taught</span>
                  </div>
                </div>
                <div style={styles.statBox}>
                  <Target size={20} color="white" strokeWidth={2.5} />
                  <div>
                    <span style={styles.statBoxNumber}>98%</span>
                    <span style={styles.statBoxLabel}>Pass Rate</span>
                  </div>
                </div>
                <div style={styles.statBox}>
                  <Star size={20} color="white" strokeWidth={2.5} />
                  <div>
                    <span style={styles.statBoxNumber}>50+</span>
                    <span style={styles.statBoxLabel}>5-Star Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.servicesSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadgeDark}>Our Services</div>
            <h2 style={styles.sectionTitleDark}>Comprehensive Driving Programs</h2>
            <p style={styles.sectionSubtitleDark}>
              Professional courses designed for all skill levels and license codes
            </p>
          </div>
          
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIconContainer}>
                <CheckCircle size={36} color="#73a9c2" strokeWidth={2} />
              </div>
              <h3 style={styles.serviceTitle}>Learner's Classes</h3>
              <p style={styles.serviceDescription}>
                Comprehensive theoretical classes covering road signs, rules, and safe driving principles to prepare you for your learner's test.
              </p>
              <div style={styles.serviceFeatures}>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Road Signs</span>
                </div>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Traffic Rules</span>
                </div>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Test Preparation</span>
                </div>
              </div>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconContainer}>
                <Car size={36} color="#73a9c2" strokeWidth={2} />
              </div>
              <h3 style={styles.serviceTitle}>Driving Lessons</h3>
              <p style={styles.serviceDescription}>
                Practical driving lessons for all skill levels, from complete beginners to experienced drivers looking to improve.
              </p>
              <div style={styles.serviceFeatures}>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Beginner to Advanced</span>
                </div>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Manual & Automatic</span>
                </div>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>City & Highway</span>
                </div>
              </div>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconContainer}>
                <Award size={36} color="#73a9c2" strokeWidth={2} />
              </div>
              <h3 style={styles.serviceTitle}>Code 8 License</h3>
              <p style={styles.serviceDescription}>
                Complete training program for Code 8 licenses including cars, bakkies, and minibuses with full test preparation.
              </p>
              <div style={styles.serviceFeatures}>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Light Vehicles</span>
                </div>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Full Training</span>
                </div>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Test Ready</span>
                </div>
              </div>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconContainer}>
                <Shield size={36} color="#73a9c2" strokeWidth={2} />
              </div>
              <h3 style={styles.serviceTitle}>Code 10 & 14</h3>
              <p style={styles.serviceDescription}>
                Professional heavy vehicle training for Code 10 and Code 14 licenses with experienced instructors.
              </p>
              <div style={styles.serviceFeatures}>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Heavy Vehicles</span>
                </div>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Professional Training</span>
                </div>
                <div style={styles.serviceFeatureItem}>
                  <CheckCircle size={16} color="#73a9c2" strokeWidth={2.5} />
                  <span>Load Handling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>Contact Us</div>
            <h2 style={styles.sectionTitle}>Start Your Driving Journey</h2>
            <p style={styles.sectionSubtitle}>
              Get in touch today to schedule your first lesson or learn more about our programs
            </p>
          </div>
          
          <div style={styles.contactContent}>
            <div style={styles.contactInfoSection}>
              <div style={styles.contactCard}>
                <div style={styles.contactIconWrapper}>
                  <Phone size={28} color="#73a9c2" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={styles.contactCardTitle}>Call Us</h4>
                  <a href="tel:0790659736" style={styles.contactLink}>079 065 9736</a>
                  <p style={styles.contactCardText}>Monday - Friday: 7AM - 5PM</p>
                </div>
              </div>
              
              <div style={styles.contactCard}>
                <div style={styles.contactIconWrapper}>
                  <MapPin size={28} color="#73a9c2" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={styles.contactCardTitle}>Service Areas</h4>
                  <p style={styles.contactCardText}>
                    Secunda<br/>
                    Devon<br/>
                    Embalenhle
                  </p>
                </div>
              </div>
              
              <div style={styles.contactCard}>
                <div style={styles.contactIconWrapper}>
                  <Clock size={28} color="#73a9c2" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={styles.contactCardTitle}>Operating Hours</h4>
                  <p style={styles.contactCardText}>
                    Mon - Fri: 7:00 AM - 5:00 PM<br/>
                    Sat - Sun: By Appointment
                  </p>
                </div>
              </div>
            </div>
            
            <div style={styles.contactFormSection}>
              <form style={styles.form}>
                <div style={styles.formGroup}>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    style={styles.input} 
                    required 
                  />
                </div>
                <div style={styles.formGroup}>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    style={styles.input} 
                    required 
                  />
                </div>
                <div style={styles.formGroup}>
                  <select style={styles.select} required>
                    <option value="">Select Service</option>
                    <option value="learners">Learner's Classes</option>
                    <option value="lessons">Driving Lessons</option>
                    <option value="code8">Code 8 License</option>
                    <option value="code10">Code 10 License</option>
                    <option value="code14">Code 14 License</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <textarea 
                    placeholder="Your message or preferred schedule" 
                    rows="4" 
                    style={styles.textarea} 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  style={styles.submitButton}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 15px 35px rgba(115, 169, 194, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 25px rgba(115, 169, 194, 0.3)';
                  }}
                >
                  <span>Send Enrollment Request</span>
                  <Send size={18} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/27790659736?text=Hello%20Vuwa%20Driving%20School!" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={styles.whatsappButton}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src="/whatsapp.jpeg" alt="WhatsApp" style={styles.whatsappIcon}/>
      </a>
    </main>
  );
}

const styles = {
  main: {
    flex: 1,
    width: '100%',
    overflowX: 'hidden',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  
  // Hero Section - Redesigned (Shorter & Better)
  hero: {
    position: 'relative',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    color: 'white',
    padding: '4rem 0'
  },
  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(./image1.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(30, 47, 58, 0.93) 0%, rgba(45, 74, 90, 0.90) 50%, rgba(69, 101, 116, 0.87) 100%)',
    zIndex: 1
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '1000px',
    padding: '0 2rem'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    lineHeight: '1.1',
    color: 'white'
  },
  heroTitleAccent: {
    background: 'linear-gradient(135deg, #73a9c2 0%, #a8d8ea 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '2.5rem',
    fontWeight: '400',
    color: '#cbd5e1',
    lineHeight: '1.6'
  },
  heroStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '2.5rem',
    flexWrap: 'wrap'
  },
  statCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.2rem 1.8rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    transition: 'all 0.3s ease',
    minWidth: '160px'
  },
  statIconBox: {
    width: '50px',
    height: '50px',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  statNumber: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: 'white',
    lineHeight: '1'
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#cbd5e1',
    fontWeight: '500',
    marginTop: '0.25rem'
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #73a9c2 0%, #5c879b 100%)',
    color: 'white',
    border: 'none',
    padding: '1.1rem 2.5rem',
    fontSize: '1.05rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(115, 169, 194, 0.3)',
    letterSpacing: '0.5px'
  },

  // Container
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },

  // Section Headers
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  sectionBadge: {
    display: 'inline-block',
    padding: '0.5rem 1.5rem',
    background: 'rgba(115, 169, 194, 0.1)',
    color: '#73a9c2',
    borderRadius: '50px',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '1rem',
    border: '1px solid rgba(115, 169, 194, 0.2)'
  },
  sectionBadgeDark: {
    display: 'inline-block',
    padding: '0.5rem 1.5rem',
    background: 'rgba(115, 169, 194, 0.15)',
    color: '#73a9c2',
    borderRadius: '50px',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '1rem',
    border: '1px solid rgba(115, 169, 194, 0.3)'
  },
  sectionTitle: {
    fontSize: '2.8rem',
    fontWeight: '800',
    color: '#1e2f3a',
    marginBottom: '1rem',
    lineHeight: '1.2'
  },
  sectionTitleDark: {
    fontSize: '2.8rem',
    fontWeight: '800',
    color: 'white',
    marginBottom: '1rem',
    lineHeight: '1.2'
  },
  sectionSubtitle: {
    fontSize: '1.2rem',
    color: '#64748b',
    fontWeight: '400',
    maxWidth: '600px',
    margin: '0 auto'
  },
  sectionSubtitleDark: {
    fontSize: '1.2rem',
    color: '#94a3b8',
    fontWeight: '400',
    maxWidth: '600px',
    margin: '0 auto'
  },

  // About Section
  aboutSection: {
    backgroundColor: '#ffffff',
    padding: '6rem 0'
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: '45% 55%',
    gap: '4rem',
    alignItems: 'start'
  },
  aboutImageSide: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)'
  },
  aboutImage: {
    width: '100%',
    height: '450px',
    objectFit: 'cover',
    display: 'block'
  },
  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    background: 'linear-gradient(to top, rgba(30, 47, 58, 0.7), transparent)'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  },
  featureBox: {
    background: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease'
  },
  featureIconBox: {
    width: '48px',
    height: '48px',
    background: 'white',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    boxShadow: '0 4px 12px rgba(115, 169, 194, 0.15)'
  },
  featureTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#1e2f3a',
    marginBottom: '0.5rem'
  },
  featureText: {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: '1.5',
    margin: 0
  },
  aboutTextSide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  aboutDescription: {
    marginBottom: '1rem'
  },
  aboutHeading: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1e2f3a',
    marginBottom: '1.5rem'
  },
  aboutText: {
    fontSize: '1.05rem',
    color: '#475569',
    lineHeight: '1.7',
    marginBottom: '1rem'
  },
  
  // Mission and Vision - Same Blue Color
  missionVisionContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '1rem'
  },
  missionCard: {
    background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
    padding: '2rem',
    borderRadius: '16px',
    border: '2px solid #bae6fd',
    boxShadow: '0 4px 15px rgba(115, 169, 194, 0.1)'
  },
  missionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  missionIconBox: {
    width: '56px',
    height: '56px',
    background: 'white',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(115, 169, 194, 0.2)'
  },
  missionTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#1e2f3a',
    margin: 0
  },
  missionText: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: '1.6',
    margin: 0
  },
  visionCard: {
    background: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
    padding: '2rem',
    borderRadius: '16px',
    border: '2px solid #bfdbfe',
    boxShadow: '0 4px 15px rgba(115, 169, 194, 0.1)'
  },
  visionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  visionIconBox: {
    width: '56px',
    height: '56px',
    background: 'white',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(115, 169, 194, 0.2)'
  },
  visionTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#1e2f3a',
    margin: 0
  },
  visionText: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: '1.6',
    margin: 0
  },
  
  statsRow: {
    display: 'flex',
    gap: '1rem'
  },
  statBox: {
    flex: 1,
    background: 'linear-gradient(135deg, #73a9c2 0%, #5c879b 100%)',
    padding: '1.2rem',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    color: 'white'
  },
  statBoxNumber: {
    fontSize: '1.5rem',
    fontWeight: '800',
    display: 'block',
    lineHeight: '1'
  },
  statBoxLabel: {
    fontSize: '0.8rem',
    display: 'block',
    opacity: 0.9,
    marginTop: '0.25rem'
  },

  // Services Section
  servicesSection: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: '6rem 0'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem'
  },
  serviceCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease'
  },
  serviceIconContainer: {
    width: '72px',
    height: '72px',
    background: 'rgba(115, 169, 194, 0.1)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    border: '1px solid rgba(115, 169, 194, 0.2)'
  },
  serviceTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '1rem'
  },
  serviceDescription: {
    fontSize: '0.95rem',
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  },
  serviceFeatures: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem'
  },
  serviceFeatureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: '#94a3b8'
  },

  // Contact Section
  contactSection: {
    backgroundColor: '#f8fafc',
    padding: '6rem 0'
  },
  contactContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '3rem'
  },
  contactInfoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  contactCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    transition: 'all 0.3s ease'
  },
  contactIconWrapper: {
    width: '60px',
    height: '60px',
    background: 'rgba(115, 169, 194, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  contactCardTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#1e2f3a',
    marginBottom: '0.5rem'
  },
  contactLink: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#73a9c2',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem'
  },
  contactCardText: {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: '1.6',
    margin: 0
  },
  contactFormSection: {
    background: 'white',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e2e8f0'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  },
  formGroup: {
    width: '100%'
  },
  input: {
    width: '100%',
    padding: '1rem 1.25rem',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '1rem',
    color: '#1e2f3a',
    backgroundColor: '#f8fafc',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  },
  select: {
    width: '100%',
    padding: '1rem 1.25rem',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '1rem',
    color: '#1e2f3a',
    backgroundColor: '#f8fafc',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '1rem 1.25rem',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '1rem',
    color: '#1e2f3a',
    backgroundColor: '#f8fafc',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  },
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #73a9c2 0%, #5c879b 100%)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 2rem',
    fontSize: '1.05rem',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 25px rgba(115, 169, 194, 0.3)',
    marginTop: '0.5rem'
  },

  // WhatsApp Button
  whatsappButton: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 1000,
    transition: 'transform 0.3s ease',
    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
    borderRadius: '50%'
  },
  whatsappIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'block'
  }
};

export default HomePage;