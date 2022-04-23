import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, DELALL } from '../todoRedux/todoReducer.js'
import { UpdateList } from './updateList.js'
import 'bootstrap/dist/css/bootstrap.css'

export const Input = () => {
    const [inputData, setinputData] = useState();
    const [filter, setFilter] = useState(true);

    const dispatch = useDispatch()

    const list = useSelector((state) => state.todos.todoList)
    console.log('list', list)

    const handleAdd = (data) => {
        try {
            if (!data) throw "Empty input"
            const payload = {
                title: data,
                id: new Date().getTime().toString().slice(9, 13),
                status: true
            }

            const action = ADD(payload);
            dispatch(action);
            console.log("payload", payload);
            setinputData("");

        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div >
            <div class="input-group mb-3">
                <input type="text" class="form-control"
                    placeholder="Write your task"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"

                    value={inputData}
                    onChange={(e) => setinputData(e.target.value)} />

                <button class="btn btn-primary" type="button" id="button-addon2"
                    onClick={() => handleAdd(inputData)}>
                    Add-Data
                </button>
            </div>

            <div class="d-grid gap-2 mx-auto" >
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">

                    <button type="button" class="btn btn-danger"
                        onClick={() => dispatch(DELALL())}>
                        Delete All Data
                    </button>

                    <button type="button" class="btn btn-primary"
                        onClick={() => setFilter(!filter)}>
                        {filter ? "SHOW ALL" : "ONLY ACTIVE"}
                    </button>
                </div>
            </div>

            <div>
                {
                    list
                        .filter((item) => filter
                            ? (item.status === filter)
                            : item)
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
