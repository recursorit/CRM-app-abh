export const ADD_USER = "ADD_USER";
export const GET_INDEX = "GET_INDEX";
export const UPDATE_USER = "UPDATE_USER";
export const EDIT_INDEX = "EDIT_INDEX";
export const REMOVE_USER = "REMOVE_USER"
export const ADMIN_ADD ="ADMIN_ADD"

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

export const removeUser = (info) => {
    return {
        type:REMOVE_USER,
        payload: info,
    }
}

export const adminEditIndex = (info) => {
    return {
        type:EDIT_INDEX,
        payload: info,
    }
}

export const adminAddUser = (info) => {
    return {
        type:ADMIN_ADD,
        payload: info,
    }
}

