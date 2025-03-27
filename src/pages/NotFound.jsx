
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container page-container">
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="page-title">404</h1>
        <p className="page-subtitle">Page not found</p>
        <div style={{ width: '100%', maxWidth: '200px', marginTop: '20px' }}>
          <Button type="primary" onClick={() => navigate('/')}>
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
