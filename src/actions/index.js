import Product from "../api/Product";

export const fetchProducts = () => {
    return async function (dispatch, getState) {
        const response = await Product.get("/");

        dispatch({ type: 'FETCH_PRODUCTS', payload: response })
    };
};
