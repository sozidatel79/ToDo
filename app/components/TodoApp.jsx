var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('app/components/TodoAdd');


var Todo = React.createClass({
    getInitialState:function () {
        return {
            todos: [
                {
                    id: 1,
                    text : "Walk the dog"
                },
                {
                    id: 2,
                    text : "Clean the yard"
                },
                {
                    id: 3,
                    text : "Get swim"
                },
                {
                    id: 4,
                    text : "Charge phone before get sleep"
                },
                {
                    id: 5,
                    text : "Watch movie"
                }
            ]
        };
    },
    render: function () {
        var {todos} = this.state;
        return (
                <div className="row">
                    <div>
                        <h1 className="page-title">Todo App</h1>
                    </div>
                    <div className="column medium-6 large-4 small-centered todo-app">
                        <TodoList todos={todos}/>
                    </div>
                </div>
        );
    }
});

module.exports = Todo;