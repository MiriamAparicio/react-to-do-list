import React, { Component } from 'react';
import axios from 'axios';

import Title from './components/Title';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
    this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }

  // Lifecycle method
  componentDidMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({ data: res.data });
      });
  }
  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = { text: val }
    // Update data
    axios.post(this.apiUrl, todo)
      .then((res) => {
        this.state.data.push(res.data);
        this.setState({ data: this.state.data });
      });
  }
  // Handle remove
  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(this.apiUrl + '/' + id)
      .then((res) => {
        this.setState({ data: remainder });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React To-Do-List</h1>
        </header>
        <div class="container">
          <Title todoCount={this.state.data.length} />
          <ToDoForm addTodo={this.addTodo.bind(this)} />
          <ToDoList
            todos={this.state.data}
            remove={this.handleRemove.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
