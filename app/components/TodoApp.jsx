var React = require('react');
var Moment = require('moment');
var uuid = require('node-uuid');
var {connect} = require('react-redux');
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';


var Todo = React.createClass({

    render: function () {
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