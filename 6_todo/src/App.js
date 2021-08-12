import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';
import TodoItemList from './TodoItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    toggle: false,
    todos: [
      { id: 0, text: 'react introduce', checked:false },
      { id: 1, text: 'react introduce', checked:true },
      { id: 2, text: 'react introduce', checked:false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todos => todos.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];
    
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleToggleChange = () => {
    const {toggle, text} =this.state;
    const {data, onUpdate} = this.props;
    if(!toggle) {
      this.setState({
        text: data.text,
        toggle:true,
      });
    }else{
      onUpdate(data.id, {text:text});
      this.setState({
        toggle:false,
      });
    }
    this.setState({

    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  // handleToggleChange = () => {
  //   const {toggle, text}
  // }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
  
    return (
      <TodoList form={(
      <Form
      value = {input}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      onCreate={handleCreate}
      // onUpdate={onUpdate}
      />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} /*onUpdate={onUpdate}*/ onRemove={handleRemove}/>
      </TodoList>
  );
  }
}

export default App;