
import React, { useState, useEffect } from 'react';

function AccountSettings() {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam'
  });

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className="container page-container">
      <h1 className="page-title">Account Settings</h1>
      
      <div className="profile-section">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src="/lovable-uploads/c11cee2e-c5eb-4297-8f12-f3c664900749.png" alt="Profile" />
            <div className="profile-avatar-edit">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 7L17 1L3 15V21H9L23 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="profile-info">
            <div className="profile-name">{userData.fullName || 'Marry Doe'}</div>
            <div className="profile-email">{userData.email || 'Marry@Gmail.Com'}</div>
          </div>
        </div>
        
        <p className="profile-description">
          {userData.description}
        </p>
      </div>
      
      <div className="divider"></div>
    </div>
  );
}

export default AccountSettings;
