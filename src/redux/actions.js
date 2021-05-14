export const ADD_USER = "ADD_USER";
export const GET_INDEX = "GET_INDEX";

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