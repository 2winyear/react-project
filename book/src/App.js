import React from 'react';
import './App.css';

const App = props => {
  return <div>안녕하세요 {props.name}</div>;
};

App.defaultProps ={
  name: '기본이름'
};

export default App;
