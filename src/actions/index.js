// Create Redux action types
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'
export const GET_PRODUCT = 'GET_PRODUCT'
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE'

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

export const getProduct = () => ({
    type: GET_PRODUCT,
})

export const getProductSuccess = (Products) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: Products,
})

export const getProductFailure = () => ({
    type: GET_PRODUCT_FAILURE,
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

export function fetchProduct(id) {
    return async (dispatch) => {
        dispatch(getProduct())

        try {
            const response = await fetch("https://cors-anywhere.herokuapp.com/" + `https://marshallchikariapi.herokuapp.com/api/v1/products/${id}`)
            const data = await response.json()

            dispatch(getProductSuccess(data))
        } catch (error) {
            dispatch(getProductFailure())
        }
    }
}