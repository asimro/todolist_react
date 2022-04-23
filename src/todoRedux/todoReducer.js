import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    todoList: [
        {
            title: 'First Task',
            id: "1",
            status: true
        }
    ]
}

const todoSlicer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        ADD: (state, action) => {
            // state.todoList.push(action.payload)
            state.todoList = [...state.todoList, action?.payload]

        },

        EDIT: (state, action) => {
            state.todoList = [...state.todoList
                .map((val) => {
                    if (val.id === action.payload.id) {
                        return {
                            ...val,
                            title: action.payload.title,
                        }
                    }
                    else {
                        return val;
                    }
                }
                )]
        },

        ACTIVE: (state, action) => {
            state.todoList = [...state.todoList
                .map((val) => {
                    if (val.id === action.payload.id) {
                        return {
                            ...val,
                            status: action.payload.status
                        }
                    }
                    else {
                        return val
                    }
                })]
        },

        DEL: (state, action) => {
            const newState = [...state.todoList
                .filter((val) => val.id !== action.payload)]

            state.todoList = newState
        },

        DELALL: (state) => {
            state.todoList = []
        }

    },
})

export const { ADD, EDIT, ACTIVE, DEL, DELALL } = todoSlicer.actions;

export const todoReducer = todoSlicer.reducer;

export default todoSlicer;
