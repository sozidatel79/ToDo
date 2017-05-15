var React = require('react');

var TodoAdd = React.createClass({

    render: function () {
        return (
            <div className="add-todo">
                <div>
                    <input type="text" ref='addtodo' placeholder="What do you need to do?"/>
                </div>
                <div>
                    <button className="button primary expanded">Add Todo</button>
                </div>
            </div>
        );
    }
});

module.exports = TodoAdd;