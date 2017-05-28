var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({

    render: function () {
        var {showCompleted, searchText, dispatch} = this.props;
        return (
            <div className="todo-search">
                <div>
                    <input value={searchText} onChange={() => {
                        dispatch(actions.setSearchText(this.refs.searchText.value));
                    }} type="text" ref='searchText' placeholder="Search todos"/>
                </div>
                <div>
                    <label>
                        <input checked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}  ref='showCompleted' type="checkbox"/>
                        <span className="chk-label">Show completed todos</span>
                    </label>
                </div>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);