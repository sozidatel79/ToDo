var redux = require('redux');
var reduxThunk = require('redux-thunk').default;
var {todoReducer} = require('../reducers/index');

export var config = () => {

    var reducers = redux.combineReducers({
        todo: todoReducer,
    });

    var store = redux.createStore(reducers, redux.compose(
        redux.applyMiddleware(reduxThunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};