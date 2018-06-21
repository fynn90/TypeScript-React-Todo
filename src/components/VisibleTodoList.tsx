import React, {Component} from 'react';
import TodoItem from './TodoItem';
export default class VisibleTodoList extends Component<VisibleTodoListComponentProp> {
    constructor(props: VisibleTodoListComponentProp) {
        super(props)
    }
    render () {
        return (
            <ul className="todo-list">
                {this.props.filteredTodos.map(todo =>
                    <TodoItem key={todo.id} todo={todo} {...this.props.actions} />
                )}
            </ul> 
        )
    }
}