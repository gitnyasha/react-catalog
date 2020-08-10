import * as actions from '../actions'

export const initialState = {
    product: [],
    loading: false,
    hasErrors: false,
}

export default function proReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_PRODUCT:
            return { ...state, loading: true }
        case actions.GET_PRODUCT_SUCCESS:
            return { product: action.payload, loading: false, hasErrors: false }
        case actions.GET_PRODUCT_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}