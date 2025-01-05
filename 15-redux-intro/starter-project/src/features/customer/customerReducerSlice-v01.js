const initialState = {
  name: '',
  natioID: "",
  createdAt: ''
}

// store reducer
export default function customerReducer(state=initialState, action) {

  switch (action.type) {
    case 'Customer/create':
      return {...action.playLoad};
      break;
    case 'Customer/modify':
      return {...state, ...action.playLoad};
    case 'Customer/delete':
      return  {name: '',natioID: "",createdAt: ''};
    default:
      return state;
  }
}

// store action creators
export function createCustomerAction(name,natioID) {
  if (name.length > 8 && natioID.length === 6 ) return {type: 'Customer/create', playLoad: {name: name,natioID: natioID, createdAt: new Date()}};
}

export function modifyCustomerAction(name,natioID) {
    return {type: 'Customer/modify', playLoad: {name: name,natioID: natioID}};
}

export function deleteCustomerAction(field,value) {
  return {type: 'Customer/delete'};
}
