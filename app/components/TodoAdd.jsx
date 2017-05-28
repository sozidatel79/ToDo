var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var TodoAdd = React.createClass({

    addTodo:function (e) {
        var {dispatch} = this.props;
        e.preventDefault();
        var newTodo = this.refs.addtodo.value;
        if(newTodo.length > 0){
            this.refs.addtodo.value = '';
            dispatch(actions.addTodo(newTodo));
        }else{
            this.refs.addtodo.focus();
        }
    },
    render: function () {
        return (
            <div className="add-todo">
                <form action="#" onSubmit={this.addTodo}>
                    <input type="text" ref='addtodo' placeholder="What do you need to do?"/>
                    <button className="button primary expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

export default connect()(TodoAdd);
