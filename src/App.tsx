import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Quizcard } from './Components/Quizcard';

function App() {
  return (
    <div style={{ display: 'grid', height: '100vh', placeItems: 'center' }} >
      
        <Quizcard />
      
    </div>
  );
}

export default App;
