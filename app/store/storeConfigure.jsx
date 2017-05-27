var redux = require('redux');
var reduxThunk = require('redux-thunk').default;
var {searchTodoReducer, showCompletedTodoReducer, completeTodoReducer, addTodoReducer} = require('../reducers/index');

export var config = () => {

    var reducers = redux.combineReducers({
        searchTodoReducer: searchTodoReducer,
        showCompletedTodoReducer:showCompletedTodoReducer,
        completeTodoReducer: completeTodoReducer,
        addTodoReducer:addTodoReducer
    });

    var store = redux.createStore(reducers, redux.compose(
        redux.applyMiddleware(reduxThunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};