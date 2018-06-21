/// <reference path="../types/types.d.ts" />
import React, { Component } from 'react';
import classnames from 'classnames';
import { ENTER_KEY, ESCAPE_KEY } from '../containers/index';
export default class Header extends Component<HeaderComponentProp, HeaderComponentState> {
    public state: HeaderComponentState;
    constructor(props: HeaderComponentProp) {
        super(props);
        this.state = {
            text: ''
        };
    }
    handleKeyDown = (e: React.KeyboardEvent): void => {
        if (e.keyCode === ESCAPE_KEY) {
            this.setState({ text: this.props.todo.title });
            this.props.onCancel(e);
        } else if (e.keyCode === ENTER_KEY) {
            this.handleSubmit(e);
        }
    }
    handleChange = (e: React.FormEvent): void => {
        var input: any = e.target;
        this.setState({ text: input.value });
    }
    handleSubmit = (e: React.FormEvent): void => {
        var val = this.state.text.trim();
        if (val) {
            this.props.onSave(val);
            this.setState({ text: val });
        } else {
            this.props.onDestroy();
        }
    }
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className={classnames({ edit: this.props.editing, 'new-todo': this.props.newTodo })}
                    type="text"
                    placeholder="What needs to be done?"
                    autoFocus={true}
                    value={this.state.text}
                    onBlur={this.handleSubmit}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
            </header>
        );
    }
}