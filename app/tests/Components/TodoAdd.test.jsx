var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoAdd = require('TodoAdd');


describe('Todo Add', () => {

    it('should exist', () => {
        expect(TodoAdd).toExist();
    });

    it('should call handleAddTodo if value entered', () => {
        var todoText = 'Call me';
        var spy = expect.createSpy();
        var todoadd = TestUtils.renderIntoDocument(<TodoAdd onNewTodo={spy} />);
        var $el = $(ReactDOM.findDOMNode(todoadd));
        todoadd.refs.addtodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call handleAddTodo if not value entered  ', () => {
        var spy = expect.createSpy();
        var todoadd = TestUtils.renderIntoDocument(<TodoAdd onNewTodo={spy} />);
        var $el = $(ReactDOM.findDOMNode(todoadd));
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });

});