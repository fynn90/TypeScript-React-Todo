import { connect } from 'react-redux';
import * as TodoActions from '../actions/index';
import { bindActionCreators, Dispatch } from 'redux';
import Main from '../components/Main';
import { getCompletedTodoCount } from '../selectors/index';

const mapStateToProps = (state: StateInterface) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);