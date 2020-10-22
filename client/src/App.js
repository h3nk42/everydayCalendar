import React from 'react';
import './App.css'
import { useState, useEffect } from 'react';
import Month from './components/Month'

function App() {


  const [buttonClicked, setButtonClicked ] = useState(true);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  }

  const returnBackgroundColor = () => {
     return buttonClicked ?
      { backgroundColor: '#0E79B2'}
      :
      { backgroundColor: 'black'}
  }

  const returnDays = (num) => {
    let days = []
    for (let i = 1; i<=num; i++) {
      days.push(i);
    }
    return days
  }

  return (
    <div className='flex-center-row outer-container' style={returnBackgroundColor()}>
      <Month month={'jan'} days={returnDays(31)} handleClick={handleClick}/>
      <Month month={'feb'} days={returnDays(28)} handleClick={handleClick}/>
      <Month month={'mar'} days={returnDays(31)} handleClick={handleClick}/>
      <Month month={'apr'} days={returnDays(30)} handleClick={handleClick}/>
      <Month month={'may'} days={returnDays(31)} handleClick={handleClick}/>
      <Month month={'jun'} days={returnDays(30)} handleClick={handleClick}/>
      <Month month={'jul'} days={returnDays(31)} handleClick={handleClick}/>
      <Month month={'aug'} days={returnDays(31)} handleClick={handleClick}/>
      <Month month={'sep'} days={returnDays(30)} handleClick={handleClick}/>
      <Month month={'okt'} days={returnDays(31)} handleClick={handleClick}/>
      <Month month={'nob'} days={returnDays(30)} handleClick={handleClick}/>
      <Month month={'dec'} days={returnDays(31)} handleClick={handleClick}/>
    </div>
  );
}

export default App