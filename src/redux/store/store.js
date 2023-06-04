import { postReducer } from "../reducer/postReducer";
import { combineReducers, createStore ,applyMiddleware} from "redux";
import thunk from "redux-thunk";


//for multiple reducers
const rootReducer = combineReducers({
    post: postReducer,
})


const store = createStore(rootReducer, applyMiddleware(thunk)); 

export default store;