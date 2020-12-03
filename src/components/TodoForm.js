import React, { Component } from 'react';

export default class TodoForm extends Component{
    render(){
        return(
            <div>
                <input placeholder="Add Todo" onChange={this.props.type} value={this.props.newEntry}/> <button onClick={this.props.add}>Add</button>
            </div>
        )
    }
}