var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {text, id} = this.props;
        return (
            <div className="todo">
                {id} {text} - Anton !
            </div>
        );
    }
});

module.exports = Todo;