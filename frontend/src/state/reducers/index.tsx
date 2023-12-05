import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: null,
  business: null,
  tradingAddress: null,
  recipients: null,
  currency: {
    send: '100',
    recieve:'100'

  },
  purpose: "",
  directors: [],
  owners:[],
};

const userSlice = createSlice({
  name: 'recipients',
  initialState,
  reducers: {
    setUser : (state, action) => {
      state.users = action.payload
    },
    setBusiness: (state, action) => {
      state.business = action.payload
    },
    setTradingAddress: (state, action) => {
      state.tradingAddress = action.payload
    },
    setRecipients: (state, action) => {
      state.recipients = action.payload;
    },
    setCurrency : (state, action) => {
      state.currency = action.payload
    },
    setPurpose : (state, action) => {
      state.purpose = action.payload
    },
    setDirectors: (state, action) => {
      state.directors = action.payload
    },
    setOwners: (state, action) => {
      state.owners = action.payload
    }
  },
});

export const { setUser,setBusiness,setTradingAddress,setRecipients,setCurrency,setPurpose,setDirectors ,setOwners} = userSlice.actions;

export default userSlice.reducer;
