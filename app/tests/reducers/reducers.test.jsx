var expect = require('expect');


var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer('', action);

      expect(res).toEqual(action.searchText);
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action ={
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    })
  })

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      }

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    })

    it('should toggle todo', () => {
      var todos = [{

        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]

      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      }

      var res = reducers.todosReducer(df(todo), )
    })
  })

})

