var Moment = require('moment');

export var searchTodoReducer = (state = '', action) => {
    switch(action.type){
        case  'SEARCH_TODO':
            return action.searchText;
        default:
            return state;
    }
};

export var showCompletedTodoReducer = (state = false, action) => {
    switch(action.type){
        case  'SHOW_COMPLETED_TODO':
            return !state;
        default:
            return state;
    }
};

export var completeTodoReducer = (state = [], action) => {
    switch(action.type){
        case  'COMPLETE_TODO':
            return state.map((todo) => {
                if(todo.id == action.id){
                    var nextCompleted = !todo.completed
                    return {
                        ...todo,
                        completed: nextCompleted,
                        completedAt: nextCompleted ? Moment().unix() : undefined
                    };
                }
            });
        default:
            return state;
    }
};

export var addTodoReducer = (state = [], action) => {
    switch(action.type){
        case  'ADD_TODO':
            return [
                ...state,
                {
                    id: getRandomId(),
                    text: action.text,
                    completed: false,
                    createdAt: Moment().unix(),
                    completedAt: undefined
                }
            ];
        default:
            return state;
    }
};

var getRandomId = () => {
    var num = 7896524;
    var random = Math.random()*num;
    return Math.floor(random);
};