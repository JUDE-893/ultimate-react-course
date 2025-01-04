import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import accountReducer from './features/account/accountReducerSlice';
import customerReducer from './features/customer/customerReducerSlice';

// sotre reducer router : combine all the reducer into a one centralized unit of reducers
const reducerRouter = combineReducers({
  account: accountReducer,
  customer: customerReducer
})

const store = createStore(reducerRouter,applyMiddleware(thunk));


//store.dispatch(depositeAction(1200))
// store.dispatch(withdrawAction(400))
// store.dispatch(requestLoanAction(1000,'to by a car for school'))
export default store
console.log(store.getState());
