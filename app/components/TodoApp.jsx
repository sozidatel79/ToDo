var React = require('react');
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
var TodoAPI = require('TodoAPI');
var Moment = require('moment');
var uuid = require('node-uuid');
var {connect} = require('react-redux');



var Todo = React.createClass({
    getInitialState:function () {
        return {
            todos: TodoAPI.getTodos(),
            showCompleted: false,
            searchText: ''
        };
    },
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },
    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div className="row">
                <div>
                    <h1 className="page-title">Todo App</h1>
                </div>
                <div className="column medium-6 large-4 small-centered todo-app">
                    <div className="container">
                        <TodoSearch/>
                        <TodoList/>
                        <TodoAdd/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = connect()(Todo);