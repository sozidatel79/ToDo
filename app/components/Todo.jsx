var React = require('react');
var Moment = require('moment');

var Todo = React.createClass({

    render: function () {
        var {text, id, completed, createdAt, completedAt} = this.props;
        var todoClassName = (completed) ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
          var message = (!completed) ? 'Created: ' : 'Completed: ';
          var timeStamp = (!completed) ? createdAt : completedAt;

          return message + Moment.unix(timeStamp).format('D MMMM Y @ HH:mm:ss ');
        };
        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id);
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

module.exports = Todo;