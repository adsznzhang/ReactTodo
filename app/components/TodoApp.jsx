import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

var TodoApp = React.createClass({
  onLogout(e){
    var {dispatch} = this.props;
    e.preventDefault()

    dispatch(actions.startLogout())
  },
  render: function () {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList/>
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp)


  /* getInitialState: function () {
   *   return{
   *     showCompleted: false,
   *     searchText: '',
   *     todos: TodoAPI.getTodos()
   *   };
   * },*/
  /* componentDidUpdate: function () {
   *   TodoAPI.setTodos(this.state.todos);
   * },
   * handleAddTodo: function (text) {
   *   this.setState({
   *     todos: [
   *       ...this.state.todos,
   *       {
   *         id: uuid(),
   *         text: text,
   *         completed: false,
   *         createdAt: moment().unix(),
   *         completedAt: undefined
   *       }
   *     ]
   *   })
   * },
   * handleSearch: function (showCompleted, searchText) {
   *   this.setState({
   *     showCompleted: showCompleted,
   *     searchText: searchText.toLowerCase()
   *   })
   * },*/
