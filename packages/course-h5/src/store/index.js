import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import Thunk from 'redux-thunk';
const store = createStore(combineReducers(reducers), applyMiddleware(Thunk));

export default store;
