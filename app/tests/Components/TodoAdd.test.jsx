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

});