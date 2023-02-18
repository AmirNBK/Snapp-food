import { combineReducers } from "redux";
import productsReducer from "./Products/ProductsReducer.tsx";
const rootreducer = combineReducers({
    productsState: productsReducer,
})
export default rootreducer;