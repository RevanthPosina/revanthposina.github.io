import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import '../assets/styles/Contact.scss';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_xxxxxxx', // Replace with your EmailJS service ID
          'template_xxxxxxx', // Replace with your EmailJS template ID
          form.current,
          'your_public_key' // Replace with your EmailJS public key
        );

        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success'
        });

        // Clear form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={errors.name ? 'error' : ''}
              />
            </div>
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={errors.email ? 'error' : ''}
              />
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className={errors.message ? 'error' : ''}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
            Send Message
          </button>
        </form>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </section>
  );
};

export default Contact;