import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  balence : 0,
  loan : 0,
  loanPurpose : ""
};

// store reducers creator
const accountSlice = createSlice({
  name: 'accountReducerSlice',
  initialState,
  reducers: {
    deposite(state,action){
      console.log(action);
      state.balence += action.amount
    },
    withdraw(state,action){
      state.balence -= action.payload
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {payload:{amount:amount,purpose:purpose}}
      },
      reducer(state,action){
      state.balence += action.payload.amount;
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
    }},
    payLoan(state,action){
      const res = state.balence - state.loan;
      if (res >= 0 ) {
        state.loan = 0;
        state.balence = res
        state.loanPurpose = '';
      }else {
        state.loan = -res;
        state.balence= 0}
    }
}});

export function depositeAction (amount,currency) {
  if (currency === 'USD') return {type: "accountReducerSlice/deposite", amount: amount};
  // convert the current to USDT
  return async function(dispatch,getState) {
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
      const data = await res.json();
      dispatch({type: "accountReducerSlice/deposite", amount: data.rates.USD});
  }
}

export const {withdraw: withdrawAction,requestLoan: requestLoanAction,payLoan: payLoanAction} = accountSlice.actions;
export default accountSlice.reducer
