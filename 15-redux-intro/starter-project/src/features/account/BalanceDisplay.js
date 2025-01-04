import {useSelector} from 'react-redux';

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balence = useSelector( (store) => {return store.account.balence} )
  return <div className="balance">{formatCurrency(balence)}</div>;
}

export default BalanceDisplay;
