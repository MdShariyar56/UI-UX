import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
