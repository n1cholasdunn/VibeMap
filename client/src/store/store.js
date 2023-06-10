import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import destinationReducer from './reducer';

const rootReducer = combineReducers({
    destination: destinationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;