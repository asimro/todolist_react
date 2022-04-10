
export const todoAdd = ({ title, id, status }) => ({
    type: "ADD",
    payload: {
        title,
        id,
        status
    }
})

export const todoEdit = ({ title, id }) => ({
    type: "EDIT",
    payload: {
        title,
        id
    }
})

export const todoDel = (id) => ({
    type: "DEL",
    payload: {
        id
    }
})


export const todoDelAll = () => ({
    type: "DELALL"
})

export const todoActive = ({ id, status }) => ({
    type: "ACT",
    payload: {
        id,
        status
    }
})
