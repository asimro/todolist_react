import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoAdd, todoDelAll } from '../todoRedux/todoAction.js'
import { UpdateList } from './updateList.js'
import 'bootstrap/dist/css/bootstrap.css'

export const Input = () => {
    const [inputData, setinputData] = useState();
    const [filter, setFilter] = useState(true);

    const dispatch = useDispatch()

    const list = useSelector((val) => {
        return val.todoReducer.todoList
    })

    const handleAdd = (data) => {
        try {
            if (!data) throw "Empty input"
            const payload = {
                title: data,
                id: new Date().getTime().toString().slice(9, 13),
                status: true
            }

            const action = todoAdd(payload);
            dispatch(action);
            console.log("payload", payload);
            // setinputData("");

        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div >
            <div class="d-inline-flex p-3 bg-secondary text-white">
                <input
                    value={inputData} onChange={(e) => setinputData(e.target.value)} />

                <button type="button" class="btn btn-primary"
                    onClick={() => handleAdd(inputData)}>
                    Add-Data
                </button>
            </div>
            <div>
                <button type="button" class="btn btn-danger"
                    onClick={() => dispatch(todoDelAll())}>
                    Delete All Data
                </button>

                <button type="button" class="btn btn-primary"
                    onClick={() => setFilter(!filter)}>
                    {filter ? "SHOW ALL" : "ONLY ACTIVE"}
                </button>
            </div>

            <div>
                {
                    list
                        .filter((item) => filter ? (item.status === filter) : item)
                        .map((item) => {
                            return (
                                <UpdateList data={item} />
                            )
                        })
                }
            </div>

        </div>
    )
}
