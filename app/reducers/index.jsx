export var todoReducer = (state = [], action) => {
    switch(action.type){
        case  'ADD_TODO':
            return[
                ...state,
                {
                    todo: action.todo
                }
            ];
        case  'SEARCH_TODO':
            return state.filter((todo) => todo.text == action.text);
        case 'SHOW_COMPLETED_TODO':
        case 'COMPLETE_TODO':
        default:
            return state;
    }
};