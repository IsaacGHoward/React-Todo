import React, { Component } from 'react';

export default class TodoForm extends Component{
    render(){
        return(
            <div>
                <input placeholder="Add Todo" onChange={this.props.type} onKeyDown={this.props.keypress} value={this.props.newEntry}/>
                <button onClick={this.props.add}>Add</button> 
                <button onClick={this.props.remove}>Remove Finished</button>
            </div>
        )
    }
}