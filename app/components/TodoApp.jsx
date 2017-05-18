var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoAPI = require('TodoAPI');


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
    getRandomId: function () {
        var num = 7896524;
        var random = Math.random()*num;
        return Math.floor(random);
    },
    handleAddTodo: function (text) {
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id: this.getRandomId(),
                    text:text,
                    completed: false
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
    handleToggle: function (id) {
       var updatedTodos = this.state.todos.map((todo) => {
           if(todo.id == id){
               todo.completed = !todo.completed;
           }
           return todo;
       });
       this.setState({
           todos:updatedTodos
       });
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
                    <TodoSearch onSearch={this.handleSearch}/>
                    <TodoList onToggle={this.handleToggle} todos={filteredTodos}/>
                    <TodoAdd onNewTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }
});

module.exports = Todo;