export const ADD_ITEM = 'add_item'
export const REMOVE_ITEM = 'remove_item'
export const UPDATE_ITEM = 'update_item'


export const addItem = data => ({
    type:ADD_ITEM,
    payload: data
})

export const removeItem = index => ({
    type: REMOVE_ITEM,
    index
})

export const updateItem = (index, data) => ({
    type: UPDATE_ITEM,
    payload: data,
    index
})
