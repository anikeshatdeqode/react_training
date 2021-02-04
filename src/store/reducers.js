import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "./actions"


const initialState = {
    rows: [{
        name: 'Anikesh',
        email: 'anikesh@gmail.com',
        date: '30/10/1999',
        img: 'https://cdn.pixabay.com/photo/2020/07/06/07/47/road-5375897_960_720.jpg',
        education: 'graduate',
        gender: 'male'
    }]
}

const reducers = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                rows: [...state.rows, action.payload]
            }
        case UPDATE_ITEM:
            const newRows = [...state.rows]
            newRows.splice(action.index, 1, action.payload)
            return { rows: newRows }
        case REMOVE_ITEM:
            const rows = [...state.rows]
            rows.splice(action.index, 1)
            return { rows }
        default:
            return state
    }
}

export default reducers
