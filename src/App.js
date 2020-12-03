import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos:[],
      newEntry:''
    };
  }
  onType = (e) =>{
    this.setState({newEntry : e.target.value});
  }
  addTodo(){
    console.log("added");
    this.setState({todos: [...this.state.todos, {task: this.state.newEntry, id: Date.now(), completed: false}]})
  }
  render() {
    return (
      <div>
        <TodoForm add={this.addTodo.bind(this)} type={this.onType.bind(this)} newEntry={this.state.newEntry}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
