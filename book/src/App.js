import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import Info from './Info';

const App = () => {
  const [visible, setVisible] = useState(false);
  return( 
    <div>
      <button onClick={()=>{setVisible(!visible);}}>{visible? '숨기기': '보이기'}</button><hr />
      {visible && <Info />}
      <LifeCycleSample/>
      <IterationSample />
      <ValidationSample />
      <Counter/>
      <Say />
      <EventPractice />
    </div>
    );
}


export default App;
