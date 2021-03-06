import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: "Eggs" },
        { id: uuid(), name: "Milk" },
        { id: uuid(), name: "Bread" },
        { id: uuid(), name: "Candy" },
    ],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        // case ADD_ITEM:
        //     return {
        //         ...state
        //     }
        // case DELETE_ITEM:
        //     return {
        //         ...state
        //     }
        default:
            return state
    }
}