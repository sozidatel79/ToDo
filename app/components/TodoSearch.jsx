var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var TodoSearch = React.createClass({

    render: function () {
        var {dispatch} = this.props;
        return (
            <div className="todo-search">
                <div>
                    <input onChange={() => {dispatch(actions.setSearchText(this.refs.searchText.value))}} type="text" ref='searchText' placeholder="Search todos"/>
                </div>
                <div>
                    <label>
                        <input onChange={() => {dispatch(actions.toggleShowCompleted())}}  ref='showCompleted' type="checkbox"/>
                        <span className="chk-label">Show completed todos</span>
                    </label>
                </div>
            </div>
        );
    }
});

export default connect()(TodoSearch);