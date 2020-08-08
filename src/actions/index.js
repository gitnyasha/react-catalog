// Create Redux action types
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

export const getProducts = () => ({
    type: GET_PRODUCTS,
})

export const getProductsSuccess = (Products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: Products,
})

export const getProductsFailure = () => ({
    type: GET_PRODUCTS_FAILURE,
})

export function fetchProducts() {
    return async (dispatch) => {
        dispatch(getProducts())

        try {
            const response = await fetch("https://cors-anywhere.herokuapp.com/" + 'https://marshallchikariapi.herokuapp.com/api/v1/products')
            const data = await response.json()

            dispatch(getProductsSuccess(data))
        } catch (error) {
            dispatch(getProductsFailure())
        }
    }
}