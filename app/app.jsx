var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory, Route, Router, IndexRoute} = require('react-router');
var TodoApp = require('TodoApp');

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App Styles
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
    <TodoApp/>,
    document.querySelector('#app')
);
