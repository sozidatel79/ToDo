export var searchTodoAction = (searchText) => {
    return {
        type: 'SEARCH_TODO',
        searchText
    };
};

export var showCompletedTodoAction = () => {
    return {
        type: 'SHOW_COMPLETED_TODO'
    };
};

export var completeTodoAction = (id) => {
    return {
        type: 'COMPLETE_TODO',
        id
    };
};

export var addTodoAction = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};
