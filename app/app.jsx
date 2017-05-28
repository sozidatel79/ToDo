var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory, Route, Router, IndexRoute} = require('react-router');
var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('store').configure();
var {Provider} = require('react-redux');
var todoAPI = require('todoAPI');
store.subscribe(() => {
    var state = store.getState();
    todoAPI.setTodos(state.todos);
    console.log('New State: ', state);
});

var initialTodos = todoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App Styles
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.querySelector('#app')
);
