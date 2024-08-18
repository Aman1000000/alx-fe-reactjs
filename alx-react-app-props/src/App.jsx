import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePage from './component/ProfilePage.jsx'
import UserDetails from './component/UserDetails.jsx'
import UserInfo from './component/UserInfo.jsx'
import UserContext from './userContext.js'
function App() {
  const userData = { name: "Jane Doe", age: 30 };

  return (
    <UserContext.Provider value={userData}>
    
        <ProfilePage />
      
    </UserContext.Provider>
  );
}
