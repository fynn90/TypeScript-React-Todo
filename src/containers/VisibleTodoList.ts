import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as TodoActions from '../actions/index';
import TodoList from '../components/VisibleTodoList';
import { getVisibleTodos } from '../selectors/index';
const mapStateToProps = (state: StateInterface) => ({
    filteredTodos: getVisibleTodos(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);