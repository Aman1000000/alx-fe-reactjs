import './App.css'
import ProfilePage from './component/ProfilePage.jsx'

import UserContext from './component/UserContext.js'
function App() {
  const userData = { name: "Jane Doe", age: 30 };

  return (
    <UserContext.Provider value={userData}>
    
        <ProfilePage />
      
    </UserContext.Provider>
  );
}
export default App;