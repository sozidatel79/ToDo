var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');


describe('Todo App', () => {

    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'New Todo';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos:[]});
        todoApp.handleAddTodo(todoText);
        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should call onToggle with proper ID', () => {
        var todoData = {
            id:34,
            text:'new todo',
            completed:false,
            createdAt: 0,
            completedAt: undefined
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos:[todoData]});
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(34);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should toggle todo from completed to uncompleted', () => {
        var todoData = {
            id:34,
            text:'new todo',
            completed:true,
            createdAt: 0,
            completedAt: 23132
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos:[todoData]});
        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(34);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });

});