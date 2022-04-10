
const initialState = {
    todoList: [
        {
            title: 'First Task',
            id: "1",
            status: true
        }
    ]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD": {
            return {
                ...state,
                todoList: [...state.todoList, action?.payload]
            }
        }

        case "EDIT": {
            return {
                ...state,
                todoList: state.todoList.map((val) => {
                    if (val.id === action.payload.id) {
                        return {
                            ...val,
                            title: action.payload.title
                        }
                    }
                    else {
                        return val;
                    }
                })
            }
        }

        case "DEL": {
            return {
                ...state,
                todoList: state.todoList.filter((item) => item.id !== action.payload.id)
            }
        }

        case "DELALL": {
            return {
                ...state,
                todoList: []
            }

        }

        case "ACT": {
            return {
                ...state,
                todoList: state.todoList.map((val) => {
                    if (val.id === action.payload.id) {
                        return {
                            ...val,
                            status: action.payload.status
                        }
                    }
                    else {
                        return val;
                    }
                })
            }
        }


        default: {
            return state
        }
    }
}
