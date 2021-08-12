import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  static defaultProps ={
    name: '기본이름'
  };

  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  }
  
  render(){
  const { name, favoriteNumber, children } = this.props; 
  return( 
    <div>
      <button onclick={this.handleClick}>랜덤 색상</button>
      <LifeCycleSample color={this.state.color}/>
      <IterationSample />
      <ValidationSample />
      <ScrollBox ref = {(ref) => this.scrollBox=ref}/>
      <button onClick={() => this.scrollBox.scrollToBottom()}>
        맨 밑으로
      </button>
      <Counter/>
      <Say />
      <EventPractice />
      안녕하세요 {name}
      제가 좋아하는 숫자는 {favoriteNumber}
      {children}
    </div>
    );
  }
}


export default App;
