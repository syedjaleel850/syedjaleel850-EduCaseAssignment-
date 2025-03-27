
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import RadioButton from '../components/RadioButton';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing again
    if (error) setError('');
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      isAgency: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.phone) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.email === formData.email)) {
      setError('A user with this email already exists');
      setIsLoading(false);
      return;
    }
    
    // Save user data to users array in localStorage
    users.push({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      companyName: formData.companyName,
      isAgency: formData.isAgency
    });
    localStorage.setItem('users', JSON.stringify(users));
    
    // Save current user data for account settings page
    localStorage.setItem('userData', JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
      description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam'
    }));
    
    console.log('Registration successful:', formData);
    navigate('/account-settings');
  };

  return (
    <div className="container page-container">
      <h1 className="page-title">Create your PopX account</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          required
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        
        <Input
          label="Phone number"
          type="tel"
          placeholder="Enter your phone number"
          required
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        
        <Input
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        
        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        
        <Input
          label="Company name"
          placeholder="Enter company name (optional)"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        
        <div className="form-group">
          <label className="form-label form-label-required">
            Are you an Agency?
          </label>
          <RadioButton
            options={[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' }
            ]}
            selected={formData.isAgency}
            onChange={handleRadioChange}
          />
        </div>
        
        <div style={{ marginTop: '36px' }}>
          <Button type="primary" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </div>
      </form>
      
      <p className="form-footer">
        Already have an account? <span className="link" onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
}

export default Register;
