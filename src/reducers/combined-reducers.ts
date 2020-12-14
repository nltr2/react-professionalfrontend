import { combineReducers } from "redux";
import customerReducers from "./customer-reducers";

const combinedReducers = combineReducers({
    fillCustomers: customerReducers.fillCustomersReducer,
    isLoading: customerReducers.isLoadingReducer,
    errorOccurred: customerReducers.errorOccurredReducer
});

export default combinedReducers;
