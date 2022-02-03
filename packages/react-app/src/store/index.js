import {createStore,applyMiddleware,combineReducers} from "redux";
import Thunk from "redux-thunk";
import reducers from "./reducers/index";
const store = createStore(
    combineReducers(reducers),
    applyMiddleware(Thunk)
);

export default store;