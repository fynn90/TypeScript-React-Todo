/// <reference path="../types/types.t.ts" />
import React, { Component } from 'react';
import classnames from 'classnames';
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text:''
        }
    }
    handleBlur = ():void => {

    }
    handleChange = ():void =>{

    }
    handleSubmit = ():void =>{

    }
    render () {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className={
                    classnames({
                        edit: this.props.editing,
                        'new-todo': this.props.newTodo
                    })}
                    type="text"
                    placeholder="What needs to be done?"
                    autoFocus="true"
                    value={this.state.text}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit} />
            </header>
        )
    }
}