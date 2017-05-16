var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('app/components/TodoAdd');


var Todo = React.createClass({
    getInitialState:function () {
        return {
            todos: [{
                id: this.getRandomId(7896524),
                text : ""
            }],
            showCompleted: false,
            searchText: ''
        };
    },
    getRandomId: function (num) {
        var random = Math.random()*num;
        return Math.floor(random);
    },
    handleAddTodo: function (text) {
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id: this.getRandomId(7962145),
                    text:text
                }
            ]
        });
    },
    handleSearch: function (searchText, showCompleted) {
      this.setState({
          showCompleted: showCompleted,
          searchText: searchText
      });
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div className="row">
                <div>
                    <h1 className="page-title">Todo App</h1>
                </div>
                <div className="column medium-6 large-4 small-centered todo-app">
                    <TodoSearch onSearch={this.handleSearch}/>
                    <TodoList todos={todos}/>
                    <TodoAdd onNewTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }
});

module.exports = Todo;