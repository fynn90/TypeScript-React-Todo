import React, { Component } from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
export default class Main extends Component<MainComponentProp> {
  constructor(props: MainComponentProp) {
    super(props);
  }
  render() {
    const { todosCount, completedCount, actions } = this.props;
    return (
      <section className="main">
        {
          !!todosCount &&
          <span>
            <input
              className="toggle-all"
              type="checkbox"
              checked={completedCount === todosCount}
            />
            <label onClick={actions.completeAllTodos} />
          </span>
        }
        <VisibleTodoList />
        {
          !!todosCount &&
          <Footer
            completedCount={completedCount}
            activeCount={todosCount - completedCount}
            onClearCompleted={actions.clearCompleted}
          />
        }
      </section>
    );
  }
}