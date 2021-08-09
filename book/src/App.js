import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  static defaultProps ={
    name: '기본이름'
  };
  
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  }
  render(){
  const { name, favoriteNumber, children } = this.props; 
  return( 
    <div>
      안녕하세요 {name}
      제가 좋아하는 숫자는 {favoriteNumber}
      {children}
    </div>
    );
  }
}


export default App;
