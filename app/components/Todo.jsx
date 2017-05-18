var React = require('react');
var Moment = require('moment');

var Todo = React.createClass({

    render: function () {
        var {text, id, completed, createdAt, completedAt} = this.props;
        var renderDate = () => {
          var message = (!completed) ? 'Created: ' : 'Completed: ';
          var timeStamp = (!completed) ? createdAt : completedAt;

          return message + Moment.unix(timeStamp).format('D MMMM Y @ HH:mm:ss ');
        };
        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;