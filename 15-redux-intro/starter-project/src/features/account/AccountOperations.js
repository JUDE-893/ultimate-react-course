import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {payLoanAction,requestLoanAction,withdrawAction,depositeAction} from './accountReducerSlice'

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const [loan,balence] = useSelector( (store) => {
    let acc = store.account;
    return [acc.loan,acc.balence]
  })
  function handleDeposit() {
    if (depositAmount > 0) dispatch(depositeAction(depositAmount,currency));
    setDepositAmount("");
  }

  function handleWithdrawal() {
    if (withdrawalAmount > 0) dispatch(withdrawAction(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (loanAmount > 0 && loanPurpose.length > 0) dispatch(requestLoanAction(loanAmount,loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
     dispatch(payLoanAction());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={!depositAmount>0}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal} disabled={!withdrawalAmount>0 || withdrawalAmount > balence}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}  disabled={loan>0 || !loanAmount > 0 || loanPurpose.length < 20}>Request loan</button>
        </div>

        <div>
          <span>Pay back {loan > 0 && '$X' +loan}</span>
          <button onClick={handlePayLoan} disabled={!loan>0}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
