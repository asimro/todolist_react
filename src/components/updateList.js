import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DEL, EDIT, ACTIVE } from '../todoRedux/todoReducer';
import 'bootstrap/dist/css/bootstrap.css'

export const UpdateList = ({ data }) => {
    console.log('data', data)

    const dispatch = useDispatch();
    const [editState, setEditState] = useState(false);
    const [inputData, setInputData] = useState();
    const [active, setActive] = useState(true);

    const handleEdit = (val) => {
        try {
            if (!inputData || !active) throw "Empty Input Feild / Inactive status"
            const payload = {
                title: val,
                id: data.id,
                status: true
            }

            const action = EDIT(payload);
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
                st = false
            }
            else {
                st = true
            }
            console.log('st', st)

            const payload = {
                id: data.id,
                status: st
            }

            const action = ACTIVE(payload);
            dispatch(action);
            console.log('payload-ACT', payload);
            setEditState(false);

        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div type="text"
            class="form-control form-control-lg"
            placeholder="Small input">

            {data.title}---
            {data.id} ---
            {data.status ? "active" : "inactive"}


            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-danger "
                    onClick={() => dispatch(DEL(data.id))}>
                    X
                </button>

                {
                    editState ?
                        <>
                            <input value={inputData}
                                onChange={(e) => setInputData(e.target.value)} />

                            <button type="button" class="btn btn-warning "
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
        </div>
    )
}
