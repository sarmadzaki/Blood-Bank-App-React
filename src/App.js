import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

class App extends Component {
  constructor() {
    super();
    
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todos: ["abc", "alsd", "aklds"],
      todosStorage: [{
        savedTodo: ""
      }]
    }
    
  }

  addTodo() {
    let todo = this.refs.todos.value;
    if (todo === "") {
      console.log("Error, Add some task");
    } else
      console.log("checking", todo);


    this.setState({
      todos: [...this.state.todos, todo]
    })
    localStorage.setItem('saveTodo', this.state.todos); 
    var sam = JSON.stringify(localStorage.getItem('saveTodo'));
    console.log("checking storage", sam);
    let a = localStorage.getItem('saveTodo');
   var b =  a.split();
   console.log(b);
    this.setState({
      todosStorage: this.state.todosStorage.push({ "savedTodo": b })
    })
  }

  render() {
    return (
      <div>
        <Timer />
        <img src={logo} alt="logo" className="App-logo" />
        <input className="form-control" type="text" ref="todos" />
        <button className="btn btn-outline-success" onClick={this.addTodo}> ADD </button>
        <div>
          {/*{this.state.todos.map((todo, i) => <p key={i}>{todo}</p>)}*/}
          <h1>Todos:</h1>
          <ul>
            {this.state.todos.map((todo, i) => <li key={i}>{todo}</li>)}
            
          </ul>
        </div>
        <h1> Items In Local Storage </h1>
        {/*<p>{localStorage.getItem('saveTodo')}</p>*/}
        <ul>
          
            {this.state.todos.map((todo, i) => <li key={i}>{localStorage.getItem('saveTodo')}</li>)}
        </ul>
      </div>
    );
  }
}
class Timer extends Component {
constructor() {
  super();
  this.state = {
        stateOfTimer: ""
  }
  this.timer = this.timer.bind(this);
}
timer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  this.setState = ({
    stateOfTimer: t
  })
}
 render() {

   
   return(
     <div className="container">
      <button onClick={this.timer()}>get time</button>
       Timer: {this.state.stateOfTimer}
     </div>
   )
 }
}
export default App;  