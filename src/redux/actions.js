export const ADD_USER = "ADD_USER";

export const addUser = (info) => {
    return {
        type:ADD_USER,
        payload: info,
    }
}