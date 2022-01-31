import React from 'react';
import './App.css';
import EmailContainer from './components/email/emailContainer';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="h-screen flex">
      <Navbar/>
      <EmailContainer/>
    </div>
  );
}

export default App;
