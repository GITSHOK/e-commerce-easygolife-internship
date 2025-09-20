import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgvkgvk");
  
  useEffect(() => {
    if (state.succeeded) {
      alert("Your message was sent successfully. Kindly wait for the response that will be sent in the email id you provided. Thank you!");
    }
  }, [state.succeeded]);

  return (
    <div style={styles.contactPage}>
      <div style={styles.contactHeader}>
        <h1 style={styles.contactTitle}>Get in Touch With Us</h1>
        <p style={styles.contactSubtitle}>Feel free to contact us regarding any issue, feedback or review (or just to have a little talk!) We'd love to hear from you and typically respond within 24 hours.</p>
      </div>
      
      <div style={styles.contactContent}>
        <div style={styles.contactFormContainer}>
          <form onSubmit={handleSubmit} style={styles.contactForm}>
            <label htmlFor="name" style={styles.label}>
              Name
            </label>
            <input
              id="name"
              type="text" 
              name="name"
              placeholder="Your full name"
              style={styles.input}
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              style={styles.error}
            />
            
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              placeholder="Your email address"
              style={styles.input}
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              style={styles.error}
            />
            
            <label htmlFor="message" style={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Yeah whats' up!"
              rows="5"
              style={styles.textarea}
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              style={styles.error}
            />
            
            <button 
              type="submit" 
              disabled={state.submitting}
              style={state.submitting ? styles.buttonSubmitting : styles.button}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  contactPage: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Arial", sans-serif',
    color: '#333',
  },
  contactHeader: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    marginBottom: '40px',
  },
  contactTitle: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  contactSubtitle: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  contactContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contactFormContainer: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    fontWeight: '600',
    color: '#2c3e50',
    fontSize: '1.1rem',
  },
  input: {
    padding: '12px 15px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  textarea: {
    padding: '12px 15px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    resize: 'vertical',
    minHeight: '150px',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  buttonSubmitting: {
    padding: '12px 20px',
    backgroundColor: '#95a5a6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'not-allowed',
  },
  error: {
    color: '#e74c3c',
    marginTop: '-15px',
    marginBottom: '15px',
    fontSize: '0.9rem',
  },
};

// Add hover and focus effects
const addFormEffects = () => {
  // Input focus effects
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = '#3498db';
      input.style.boxShadow = '0 0 0 2px rgba(52, 152, 219, 0.2)';
    });
    input.addEventListener('blur', () => {
      input.style.borderColor = '#ddd';
      input.style.boxShadow = 'none';
    });
  });
  
  // Button hover effect
  const button = document.querySelector('button');
  if (button && !button.disabled) {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#2980b9';
      button.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#3498db';
      button.style.transform = 'translateY(0)';
    });
  }
};

// Add effects after component mounts
setTimeout(addFormEffects, 100);

export default ContactForm;