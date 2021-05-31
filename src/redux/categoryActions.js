export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_CATINDEX = "GET_CATINDEX";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY"

export const addCategory = (info) => {
    return {
        type:ADD_CATEGORY,
        payload: info,
    }
}

export const categoryIndex = (info) => {
    return {
        type:GET_CATINDEX,
        payload: info,
    }
}

export const updateCategory = (info) => {
    return {
        type:UPDATE_CATEGORY,
        payload: info,
    }
}

export const removeCategory = (info) => {
    return {
        type:REMOVE_CATEGORY,
        payload: info,
    }
}