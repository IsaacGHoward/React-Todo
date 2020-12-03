// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';
export default class TodoList extends Component{
    constructor() {
        super();
        this.mapTodos = this.mapTodos.bind(this);
    }
    mapTodos = () => {
        this.props.todos.map((todo) => (
            <p key={todo.id}>{todo.task}</p>
        ))
    }
    render(){
        return (
          //<h1>TodoList: {this.props.todos}</h1>
          <div>
            {
              this.mapTodos()
            }
          </div>
        );
    }
}