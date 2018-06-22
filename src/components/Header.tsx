
import React, { Component } from 'react';
import classnames from 'classnames';
import { ENTER_KEY, ESCAPE_KEY } from '../constants/index';
import TodoTextInput from '../components/TodoTextInput';
export default class Header extends Component<TodoTextComponentProp> {

    constructor(props: TodoTextComponentProp) {
        super(props);
    }
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput
                    editing={this.props.editing}
                    newTodo={this.props.newTodo}
                    onSave={(text) => {
                        if (text.length !== 0) {
                            this.props.onSave(text);
                        }
                    }}
                />
            </header>
        );
    }
}