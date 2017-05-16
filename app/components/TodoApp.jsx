var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('app/components/TodoAdd');


var Todo = React.createClass({
    getInitialState:function () {
        return {
            todos: [{
                id: this.getRandomId(),
                text : "Walk dog",
                completed: false
            },{
                id: this.getRandomId(),
                text : "Feed cat",
                completed: true
            },{
                id: this.getRandomId(),
                text : "Charge mobile phone",
                completed: true
            },{
                id: this.getRandomId(),
                text : "Clean the yard",
                completed: false
            }],
            showCompleted: false,
            searchText: ''
        };
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
        var {todos} = this.state;
        return (
            <div className="row">
                <div>
                    <h1 className="page-title">Todo App</h1>
                </div>
                <div className="column medium-6 large-4 small-centered todo-app">
                    <TodoSearch onSearch={this.handleSearch}/>
                    <TodoList onToggle={this.handleToggle} todos={todos}/>
                    <TodoAdd onNewTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }
});

module.exports = Todo;