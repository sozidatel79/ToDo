var React = require('react');
var Moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

var Todo = React.createClass({

    render: function () {
        var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = (completed) ? 'todo todo-completed' : 'todo';

        var renderDate = () => {
          var message = (!completed) ? 'Created: ' : 'Completed: ';
          var timeStamp = (!completed) ? createdAt : completedAt;

          return message + Moment.unix(timeStamp).format('D MMMM Y @ HH:mm:ss ');
        };
        return (
            <div className={todoClassName} onClick={() => {
                dispatch(actions.toggleTodo(id));
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo-subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = connect()(Todo);