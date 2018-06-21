import React, {Component} from 'react';
import classnames from 'classnames';
import TodoTextInput from '../components/TodoTextInput'
export default class TodoItem extends Component<TodoItemComponentProp, TodoItemComponentState> {
    public state: TodoItemComponentState
    constructor(props: TodoItemComponentProp) {
        super(props);
        this.state = {
            editing: false
        }
    }
    handleSave = (id: number, text: string) => {

    }
    handleDoubleClick = () => {
        this.setState({ editing: true })
    }
    render () {
        const { todo, completeTodo, deleteTodo } = this.props

        let element
        if (this.state.editing) {
            element = (
                <TodoTextInput text={todo.text}
                    editing={this.state.editing}
                    newTodo={false}
                    onSave={(text: string) => this.handleSave(todo.id, text)} />
            )
        } else {
            element = (
                <div className="view">
                    <input className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => completeTodo(todo.id)} />
                    <label onDoubleClick={this.handleDoubleClick}>
                        {todo.text}
                    </label>
                    <button className="destroy"
                        onClick={() => deleteTodo(todo.id)} />
                </div>
            )
        }
        return (
            <li className={classnames({
                completed: todo.completed,
                editing: this.state.editing
            })}>
                {element}
            </li>
        )
    }
}