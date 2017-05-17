var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

    beforeEach(() => {
       localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    it('should set valid todos array', () => {
        var todos = [{
            id:345,
            text: "Hello",
            completed:false
        }];
        TodoAPI.setTodos(todos);
        var actualTodos = JSON.parse(localStorage.getItem('todos'));
        expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
        var todos ={
            id:'asd',
            text: "Hello",
            completed:false
        };
        TodoAPI.setTodos(todos);
        expect(localStorage.getItem('todos')).toBe(null);
    });

    it('should return empty array for bad or empty localStorage data', () => {
        expect(TodoAPI.getTodos().length).toBe(0);
        expect(TodoAPI.getTodos()).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
        var todos =[{
            id:'asd',
            text: "Hello",
            completed:false
        }];
        localStorage.setItem('todos', JSON.stringify(todos));
        expect(TodoAPI.getTodos()).toEqual(todos);
    });
});