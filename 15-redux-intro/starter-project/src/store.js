import {configureStore} from '@reduxjs/toolkit';
import accountReducer from './features/account/accountReducerSlice';
import customerReducer from './features/customer/customerReducerSlice';

//setting up the store
const store = configureStore({
  reducer: {account: accountReducer, customer: customerReducer}
});
export default store
console.log(store.getState());
