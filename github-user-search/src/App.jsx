import React from 'react';
import Search from './components/Search';
import './index.css';

function App() {
  return (
    <div>
      <h1 className="text-center text-2xl my-4">GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;