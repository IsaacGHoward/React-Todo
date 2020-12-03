import React from 'react';
import './App.css';
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
  keypress = (e) =>{
    if(e.keyCode == 13)
      this.addTodo();
  }
  onType = (e) =>{
    this.setState({newEntry : e.target.value});
  }
  addTodo(){
    this.setState({todos: [...this.state.todos, {task: this.state.newEntry, id: Date.now(), completed: false}]});
    this.setState({newEntry: ''});
  }
  removeTodos(){
    this.setState({todos: 
      this.state.todos.filter(todo => !todo.completed)
    })
  }
  todoClicked(id){
    let copy = this.state.todos;
    copy.map((todo) => {
      if(todo.id != id) return todo;
      else{
        todo.completed = !todo.completed;
        return todo;
      }
    })
    this.setState({todos: copy});
  }
  render() {
    return (
      <div className={'App-header'}>
        <TodoForm keypress={this.keypress.bind(this)} add={this.addTodo.bind(this)} remove={this.removeTodos.bind(this)} type={this.onType.bind(this)} newEntry={this.state.newEntry}/>
        <TodoList todos={this.state.todos} todoclicked={this.todoClicked.bind(this)}/>
      </div>
    );
  }
}

export default App;
