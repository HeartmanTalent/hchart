import { createContext, useReducer } from "react";

export const ContactContext = createContext({
  contacts: [],
  setContacts: (contacts) => { },
  updateContact: (id, avatar, fname, lname, phone) => { },
});

function contactReducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "UPDATE":
      const contactIndex = state.findIndex(
        (contact) => contact._id === action.payload.id
      );
      const updatableContact = state[contactIndex];
      const updatedItem = { ...updatableContact, clients: action.payload.data };
      const updatedContacts = [...state];
      updatedContacts[contactIndex] = updatedItem;
      return updatedContacts;
    default:
      return state;
  }
}

function ContactContextProvider({ children }) {
  const [contactState, dispatch] = useReducer(contactReducer, [{ id: 1, avatar: "", fname: "Talent", lname: "Sibanda", phone: "+263784893647" }]);
  function setContacts(contacts) {
    dispatch({ type: "SET", payload: contacts });
  }

  function updateContact(id, clients) {
    dispatch({ type: "UPDATE", payload: { id: id, data: clients } });
  }


  const value = {
    contacts: contactState,
    setContacts: setContacts,
    updateContact: updateContact,
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}

export default ContactContextProvider;
