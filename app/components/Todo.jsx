var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {text, id} = this.props;
        return (
            <div className="todo">
                {text}
            </div>
        );
    }
});

module.exports = Todo;