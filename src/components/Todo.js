import React, { Component } from 'react';

export default class Todo extends Component{

    render(){
        if(!this.props.completed)
        return(
            <p onClick={() => this.props.clicked(this.props.id)}>{this.props.task}</p>
        )
        else if(this.props.completed)
        return(
            <p style={{textDecoration:'line-through'}} onClick={() => this.props.clicked(this.props.id)}>{this.props.task}</p>
        )
    }
}