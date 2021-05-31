export const ADD_PROJECT = "ADD_PROJECT";
export const GET_PROINDEX = "GET_PROINDEX";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT"

export const addProject = (info) => {
    return {
        type:ADD_PROJECT,
        payload: info,
    }
}

export const projectIndex = (info) => {
    return {
        type:GET_PROINDEX,
        payload: info,
    }
}

export const updateProject = (info) => {
    return {
        type:UPDATE_PROJECT,
        payload: info,
    }
}

export const removeProject = (info) => {
    return {
        type:REMOVE_PROJECT,
        payload: info,
    }
}