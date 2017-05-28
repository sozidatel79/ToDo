var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');
var TodoAPI = require('TodoAPI');
var TodoList = React.createClass({

    render: function () {
        var {todos, searchText, showCompleted} = this.props;
        var renderTodos = () => {
            if(todos.length == 0){
                return (
                  <p className="no-todo-message">Nothing to do</p>
                );
            }
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return <Todo key={todo.id} {...todo}/>
            });
        }
        return (
            <div className="todo-list">
                {renderTodos()}
            </div>
        );
    }
});

module.exports = connect(
    (state) => {
        return state;
    }
)(TodoList);