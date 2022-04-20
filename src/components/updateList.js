import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoDel, todoEdit, todoActive } from '../todoRedux/todoAction';
import 'bootstrap/dist/css/bootstrap.css'

export const UpdateList = ({ data }) => {
    console.log('data', data)

    // const task = useSelector((val) => {
    //     return val.todoReducer.todoList
    // })
    // console.log("task", task);


    const dispatch = useDispatch();
    const [editState, setEditState] = useState(false);
    const [inputData, setInputData] = useState();
    const [active, setActive] = useState(true);

    const handleEdit = (val) => {
        try {
            if (!inputData || !active) throw "Empty Input Feild"
            const payload = {
                title: val,
                id: data.id
            }

            const action = todoEdit(payload);
            dispatch(action);
            console.log('payload-Edit', payload);
            setEditState(false);

        } catch (error) {
            console.log('error', error)
        }
    }

    const handleAct = async () => {
        try {

            let st;
            if (active === true) {
                st = false                //st = "INACTIVE"
            }
            else {
                st = true
            }
            console.log('st', st)

            const payload = {
                id: data.id,
                status: st
            }

            const action = todoActive(payload);
            dispatch(action);
            console.log('payload-ACT', payload);
            // setEditState(false);

        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div type="text" class="form-control form-control-sm" placeholder="Small input">

            {data.title}---
            {data.id} ---
            {data.status ? "active" : "inactive"}

            <button type="button" class="btn btn-danger"
                onClick={() => dispatch(todoDel(data.id))}>
                X
            </button>

            {
                editState ?
                    <>
                        <input value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />

                        <button type="button" class="btn btn-warning"
                            onClick={() => handleEdit(inputData)}>
                            Submit
                        </button>
                    </>
                    : ""
            }
            <button type="button" class="btn btn-success"
                onClick={() => setEditState(!editState)}>
                EDIT
            </button>


            <button type="button" class="btn btn-info"
                onClick={() => { setActive(!active); handleAct() }}>
                {data.status ? "Active" : "InActive"}

            </button>
        </div>
    )
}
