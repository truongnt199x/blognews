import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {apiReducer} from '../reducers/apiReducer';

export default function configureStore(){
    return createStore(combineReducers({data:apiReducer}),applyMiddleware(thunk));
}
