export const ADD_USER = "ADD_USER";
export const GET_INDEX = "GET_INDEX";
export const UPDATE_USER = "UPDATE_USER";


export const addUser = (info) => {
    return {
        type:ADD_USER,
        payload: info,
    }
}

export const userIndex = (info) => {
    return {
        type:GET_INDEX,
        payload: info,
    }
}

export const updateUser = (info) => {
    return {
        type:UPDATE_USER,
        payload: info,
    }
}