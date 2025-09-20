import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About Our Company</h1>
        <p style={styles.subtitle}>Learn more about who we are and what we do</p>
      </header>
      
      <main style={styles.content}>
        <section style={styles.section}>
          <div style={styles.textContent}>
            <h2 style={styles.sectionTitle}>Our Mission</h2>
            <p style={styles.paragraph}>
              We are dedicated to creating innovative solutions that make people's lives easier. 
              Through careful design and cutting-edge technology, we strive to deliver exceptional 
              value to our customers.
            </p>
            <p style={styles.paragraph}>
              Since our founding in 2010, we've been committed to excellence in every project we undertake.
            </p>
          </div>
          <div style={styles.imageContainer}>
            {/* Replace the src with your actual image path */}
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Our team working together" 
              style={styles.missionImage}
            />
          </div>
        </section>
        
        <section style={styles.section}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>Our Values</h2>
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Innovation</h3>
              <p style={styles.valueText}>We constantly explore new ideas and approaches to solve complex problems.</p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Quality</h3>
              <p style={styles.valueText}>We never compromise on quality and always strive for excellence.</p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Integrity</h3>
              <p style={styles.valueText}>We conduct our business with honesty and transparency.</p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Community</h3>
              <p style={styles.valueText}>We believe in giving back and supporting the communities we serve.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer style={styles.footer}>
        <p style={styles.footerText}>Interested in working with us? <a href="/contact" style={styles.footerLink}>Get in touch</a></p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Arial", sans-serif',
    color: '#333',
    lineHeight: 1.6,
  },
  header: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    alignItems: 'center',
  },
  textContent: {
    flex: '1',
    minWidth: '300px',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#2c3e50',
  },
  paragraph: {
    lineHeight: '1.6',
    marginBottom: '15px',
    fontSize: '1.1rem',
  },
  imageContainer: {
    flex: '1',
    minWidth: '300px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  missionImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.3s ease',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '25px',
    width: '100%',
  },
  valueCard: {
    backgroundColor: '#f8f9fa',
    padding: '25px',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  valueTitle: {
    color: '#3498db',
    marginBottom: '15px',
    fontSize: '1.4rem',
  },
  valueText: {
    lineHeight: '1.6',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    width: '100%',
  },
  teamMember: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    transition: 'transform 0.3s ease',
  },
  memberImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 20px',
    border: '4px solid #3498db',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  memberName: {
    marginBottom: '5px',
    color: '#2c3e50',
    fontSize: '1.2rem',
  },
  memberRole: {
    color: '#7f8c8d',
    margin: 0,
  },
  footer: {
    textAlign: 'center',
    marginTop: '60px',
    padding: '30px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  footerText: {
    margin: '0',
    fontSize: '1.1rem',
  },
  footerLink: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
};

// Add hover effects with JavaScript
const addHoverEffects = () => {
  // Value cards hover effect
  const valueCards = document.querySelectorAll('[style*="valueCard"]');
  valueCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      card.style.backgroundColor = '#e3f2fd';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
      card.style.backgroundColor = '#f8f9fa';
    });
  });
  
  // Team members hover effect
  const teamMembers = document.querySelectorAll('[style*="teamMember"]');
  teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
      member.style.transform = 'translateY(-5px)';
      member.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
    member.addEventListener('mouseleave', () => {
      member.style.transform = 'translateY(0)';
      member.style.boxShadow = 'none';
    });
  });
  
  // Mission image hover effect
  const missionImage = document.querySelector('[style*="missionImage"]');
  if (missionImage) {
    missionImage.addEventListener('mouseenter', () => {
      missionImage.style.transform = 'scale(1.03)';
    });
    missionImage.addEventListener('mouseleave', () => {
      missionImage.style.transform = 'scale(1)';
    });
  }
  
  // Footer link hover effect
  const footerLink = document.querySelector('[style*="footerLink"]');
  if (footerLink) {
    footerLink.addEventListener('mouseenter', () => {
      footerLink.style.color = '#2980b9';
    });
    footerLink.addEventListener('mouseleave', () => {
      footerLink.style.color = '#3498db';
    });
  }
};

// Simulate componentDidMount for hover effects
setTimeout(addHoverEffects, 100);

export default About;