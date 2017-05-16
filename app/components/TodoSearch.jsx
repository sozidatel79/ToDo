var React = require('react');

var TodoSearch = React.createClass({
    handleOnChange: function () {
      var searchText = this.refs.searchText.value;
      var showCompleted = this.refs.showCompleted.checked;
      this.props.onSearch(showCompleted, searchText);
    },
    render: function () {
        return (
            <div className="todo-search">
                <div>
                    <input id="schtext" onChange={this.handleOnChange} type="text" ref='searchText' placeholder="Search todos"/>
                </div>
                <div>
                    <label>
                        <input onChange={this.handleOnChange}  ref='showCompleted' type="checkbox"/>
                        <span className="chk-label">Show completed todos</span>
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;