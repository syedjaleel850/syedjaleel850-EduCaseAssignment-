
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    // Simulate checking credentials against stored users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === formData.email);
    
    if (user && user.password === formData.password) {
      // Save current user data to localStorage for the account settings page
      localStorage.setItem('userData', JSON.stringify({
        fullName: user.fullName || 'Marry Doe',
        email: user.email,
        description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam'
      }));
      
      console.log('Login successful');
      navigate('/account-settings');
    } else {
      setError('Invalid email or password');
      setIsLoading(false);
    }
  };

  return (
    <div className="container page-container">
      <h1 className="page-title">Signin to your PopX account</h1>
      <p className="page-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        
        <Button type="gray" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      
      <p className="form-footer">
        Don't have an account? <span className="link" onClick={() => navigate('/register')}>Create Account</span>
      </p>
    </div>
  );
}

export default Login;
