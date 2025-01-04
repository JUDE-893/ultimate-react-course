import {useSelector} from 'react-redux';

function Customer() {
  const customer = useSelector( (store) => { return store.customer.name})
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
