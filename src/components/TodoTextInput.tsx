import React, { Component } from 'react';
import classnames from 'classnames';
import { ENTER_KEY } from '../constants/index';
export default class TodoTextInput extends Component<TodoTextComponentProp, TodoTextComponentState> {
    public state: TodoTextComponentState;
    constructor(props: TodoTextComponentProp) {
        super(props);
        const text = this.props.text || '';
        this.state = {
            text: text
        };
    }
    handleBlur = (e: React.FormEvent): void => {
        var input: any = e.target;
        if (!this.props.newTodo) {
            this.props.onSave(input);
        }
    }
    handleChange = (e: React.FormEvent): void => {
        var input: any = e.target;
        this.setState({ text: input.value });
    }
    handleSubmit = (e: React.KeyboardEvent): void => {
        var val = this.state.text.trim();
        if (val && e.keyCode === ENTER_KEY) {
            this.props.onSave(val);
            if (this.props.newTodo) {
                this.setState({ text: '' });
            }
        }
    }
    render () {
        return (
            <input
                className={classnames({ edit: this.props.editing, 'new-todo': this.props.newTodo })}
                type="text"
                placeholder="What needs to be done?"
                autoFocus={true}
                value={this.state.text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        );
    }
}