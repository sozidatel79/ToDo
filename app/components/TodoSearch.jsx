var React = require('react');

var TodoSearch = React.createClass({
    render: function () {
        return (
            <div className="todo-search">
                <div>
                    <input type="text" ref='search' placeholder="Search todos"/>
                </div>
                <div>
                    <input type="checkbox"/><span className="chk-label">Show completed todos</span>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;