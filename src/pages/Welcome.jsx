
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container page-container">
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 className="page-title">Welcome to PopX</h1>
        <p className="page-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <Button type="primary" onClick={() => navigate('/register')}>
            Create Account
          </Button>
          
          <Button type="secondary" onClick={() => navigate('/login')}>
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
