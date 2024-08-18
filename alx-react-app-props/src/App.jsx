import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePage from './ProfilePage.jsx'
import UserDetails from './UserDetails.jsx'
import UserInfo from './Userinfo.jsx'
import UserContext from './userContext.js'
function App() {
  const userData = { name: "Jane Doe", age: 30 };

  return (
    <UserContext.Provider value={userData}>
    
        <ProfilePage />
      
    </UserContext.Provider>
  );
}
