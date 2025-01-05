import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  name: '',
  natioID: "",
  createdAt: ''
}

// store reducer
const customerReducerSlice = createSlice({
  name : 'customer',
  initialState,
  reducers : {
    create: {
      prepare(name,natioID) {
        console.log(name,natioID);
        return {payload : {
          name : name, natioID: natioID, createdAt: new Date()
        }}
      },
      reducer(state,action) {
        console.log(action);
        state.name = action.payload.name;
        state.natioID = action.payload.natioID;
        state.createdAt = action.payload.createdAt;
    }},
    modify : {
      prepare(name,natioID) {
        return { payload : {name: name, natioID: natioID}}
      },
      reducer(state,action) {
        state.name = action.payload.name;
        state.natioID = action.payload.natioID;
      }
    },
    delete(state,action) {
      state.name= '';
      state.natioID= "";
      state.createdAt= ''
    }
  }
})

export const {create: createCustomerAction, modify:modifyCustomerAction, delete:deleteCustomerAction} = customerReducerSlice.actions;
export default customerReducerSlice.reducer
