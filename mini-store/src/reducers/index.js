import { combineReducers } from "redux";
import cartReducer from "./cartReducer.js"; // Import the new cart reducer

const rootReducer = combineReducers({
    cart: cartReducer // Add the cart reducer to the combined reducers
});

export default rootReducer;
