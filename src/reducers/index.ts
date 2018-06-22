import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers<any, any>({
  todos,
  visibilityFilter
});

export default rootReducer;