import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";


const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
  builder
  .addCase(fetchContacts.pending, (state)=> {
    state.loading = true;
  })
  .addCase(fetchContacts.fulfilled, (state, action)=> {
    state.loading = false;
    state.error = null;
    state.items = action.payload;
  })
  .addCase(fetchContacts.rejected, (state, action)=> {
    state.loading = false;
    state.error = action.payload;
  })
  .addCase(addContact.pending, (state)=> {
    state.loading = true;
  })
  .addCase(addContact.fulfilled, (state, action) => {
  state.loading = false;
  state.error = null;
  
  // Çift eklemeyi önlemek için kontrol ekleyin
  const isDuplicate = state.items.some(contact => 
    contact.id === action.payload.id || 
    contact.number === action.payload.number
  );
  
  if (!isDuplicate) {
    state.items.push(action.payload);
  }
})
  .addCase(addContact.rejected, (state, action)=> {
    state.loading = false;
    state.error = action.payload;
  })
  .addCase(deleteContact.pending, (state)=> {
    state.loading = true;
  })
  .addCase(deleteContact.fulfilled, (state, action)=> {
    state.loading = false;
    state.error = null;
    state.items = state.items.filter((contact) => contact.id !== action.payload.id);
  })
  .addCase(deleteContact.rejected, (state, action)=> {
    state.loading = false;
    state.error = action.payload;
  })
}
});


export default contactsSlice.reducer;
