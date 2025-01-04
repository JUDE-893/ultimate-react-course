const initialState = {
  balence : 0,
  loan : 0,
  loanPurpose : ""
};

// store reducers
export default function accountReducer(state= initialState, action){
  switch (action.type) {
    case "Account/deposite":
      return {...state, balence : state.balence + action.amount}
      break;
    case "Account/withdraw":
      if (state.balence < action.amount) return state;
      return {...state, balence : state.balence - action.amount}
      break;
    case "Account/requestLoan":
      if (state.loan > 0 || (action.purpose).length<20) {return state;};
      return {...state,balence: state.balence + action.amount, loan : action.amount, loanPurpose: action.purpose}
      break;
    case "Account/payLoan":
      const res = state.balence - state.loan;
      if (res >= 0 ) return {...state, loan : 0, balence: res}
      return {...state, loan : -res, balence: 0}
      break;
    default:
      return state;
  }};

//store actions creator
export function depositeAction (amount,currency) {
  if (currency === 'USD') return {type: "Account/deposite", amount: amount};
  // convert the current to USDT
  return async function(dispatch,getState) {
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
      const data = await res.json();
      dispatch({type: "Account/deposite", amount: data.rates.USD});
  }
}

export function withdrawAction (amount) {
  return {type: "Account/withdraw", amount: amount}
}

export function requestLoanAction (amount,purpose=null) {
  return {type: "Account/requestLoan", amount: amount,purpose: purpose}
}

export function payLoanAction (amount) {
  return {type: "Account/payLoan"}
}
