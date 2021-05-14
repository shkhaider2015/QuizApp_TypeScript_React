import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Quizcard } from './Components/Quizcard';
import { CounterContextProvider } from './Context/ContextAPI';
import DATA from "./Data/data.json";

function App() {
  // const answerCTX = React.useState(0)
  return (
    <div style={{ display: 'grid', height: '100vh', placeItems: 'center' }} >
     <CounterContextProvider>
        <Quizcard />
     </CounterContextProvider>
     
      
    </div>
  );
}

export default App;
