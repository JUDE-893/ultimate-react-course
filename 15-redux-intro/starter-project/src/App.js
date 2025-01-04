import {useSelector} from 'react-redux';
import CreateCustomer from "./features/customer/CreateCustomer";
import Customer from "./features/customer/Customer";
import Profile from "./features/customer/Profile";
//import {accountReducer} from '.features\account\accountReducerSlice';
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";

function App() {

  const customer = useSelector( (store) => { return store.customer.name})
  console.log(customer);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!customer.length > 0 ? <CreateCustomer />
      : <>
      <Profile/>
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
        </>}
    </div>
  );
}

export default App;
