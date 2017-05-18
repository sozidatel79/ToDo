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

    describe('Filter Todos', () => {
        var todos =[{
            id:'123123123',
            text: "Hello",
            completed:true
        },{
            id:'456465456',
            text: "Hello 2",
            completed:false
        },{
            id:'456465456',
            text: "Hello 2",
            completed:false
        }];

        it('should return All todos if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return not completed todos only if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(2);
        });

        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

    });



});