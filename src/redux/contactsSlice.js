const { createSlice, nanoid } = require('@reduxjs/toolkit');

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts.push({
        name: action.payload.name,
        number: action.payload.number,
        id: nanoid(),
      });
    },
    delContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContacts, delContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
