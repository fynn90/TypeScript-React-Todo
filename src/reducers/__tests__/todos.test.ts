import todos from '../todos';
import * as types from '../../constants/index';

describe('reducers todos test', () => {

  it('empoty tod', () => {
    expect(todos(undefined, { type: '' })).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ]);
  });

  it('should handle CLEAR_COMPLETED', () => {
    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: true,
            id: 1
          }, {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.CLEAR_COMPLETED
        })
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });

});