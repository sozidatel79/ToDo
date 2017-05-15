var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('app/components/TodoAdd');


var Todo = React.createClass({
    getInitialState:function () {
        return {
            todos: [{
                id: 1,
                text : "text"
            },{
                id:2,
                text:'Check the mail'
            }],
            showCompleted: false,
            searchText: ''
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        console.log(this.state.showCompleted,this.state.searchText);
    },
    handleAddTodo: function (text) {
        this.setState((prevState) => {
            return {

            };
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