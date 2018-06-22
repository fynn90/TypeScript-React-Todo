import React, { Component } from 'react';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/index';
import FilterLink from '../containers/FilterLink';
const FILTER_TITLES: any = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
};
export default class Footer extends Component<FooderComponentProp, FooderComponentState> {
    public state: FooderComponentState;
    constructor(props: FooderComponentProp) {
        super(props);
        // const { activeCount, completedCount, onClearCompleted } = this.props
        this.state = {
            itemWord: (this.props.activeCount === 1 ? 'item' : 'items')
        };
    }
    clearCompleted = () => {
        this.props.onClearCompleted();
    }
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.activeCount || 'No'}</strong> {this.state.itemWord} left
                </span>
                <ul className="filters">
                    {Object.keys(FILTER_TITLES).map(filter =>
                        <li key={filter}>
                            <FilterLink filter={filter}>
                                {FILTER_TITLES[filter]}
                            </FilterLink>
                        </li>
                    )}
                </ul>
                {
                    !!this.props.completedCount &&
                    <button
                        className="clear-completed"
                        onClick={this.clearCompleted}
                    >
                        Clear completed
                    </button>

                }
            </footer>
        );
    }
}