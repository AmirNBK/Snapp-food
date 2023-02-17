import { combineReducers } from "redux";
import productsReducer from "./Products/ProductsReducer";
const rootreducer = combineReducers({
    productsState: productsReducer,
})
export default rootreducer;