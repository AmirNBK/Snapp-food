import axios from "axios";
const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCTS_REQUEST",
    };
};

const fetchProductsSuccess = (product) => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: product,
    };
};
const fetchProductsFailure = (error) => {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error,
    };
};
export const fetchProducts = (query, pageSize, page) => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        axios.get(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?extra-filter=&lat=${query.lat}&long=${query.long}&page_size=${pageSize}&page=${page}`)
            .then((response) => {
                const products = response.data.data.finalResult;
                dispatch(fetchProductsSuccess(products))
            }).catch(error => {
                const errorMessage = error.message
                dispatch(fetchProductsFailure(errorMessage))
            })
    };
};