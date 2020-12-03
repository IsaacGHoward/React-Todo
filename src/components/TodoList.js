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
        return(
            this.props.todos.map((todo) => (
                <Todo key={todo.id} task={todo.task} id={todo.id} completed={todo.completed} clicked={this.props.todoclicked}/>
            ))
        )
    }
    render(){
        return (
          <div>
            {
              this.mapTodos()
            }
          </div>
        );
    }
}