import { createContext, useReducer } from "react";

export const ChatContext = createContext({
  chats: [],
  setChats: (chats) => { },
  updateChat: (id, contacts) => { },
});

function chatReducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "UPDATE":
      const clientIndex = state.findIndex(
        (client) => client._id === action.payload.id
      );
      const updatableChat = state[clientIndex];
      const updatedItem = { ...updatableChat, contacts: action.payload.data };
      const updatedChats = [...state];
      updatedChats[clientIndex] = updatedItem;
      return updatedChats;
    default:
      return state;
  }
}

function ChatContextProvider({ children }) {
  const [clientState, dispatch] = useReducer(chatReducer, [{ id: 4, avatar: "", fname: "Narshy", lname: "Bae", message: "Hie Honey" }]);

  function setChats(chats) {
    dispatch({ type: "SET", payload: chats });
  }

  function updateChat(id, contacts) {
    dispatch({ type: "UPDATE", payload: { id: id, data: contacts } });
  }

  const value = {
    chats: clientState,
    setChats: setChats,
    updateChat: updateChat,
  };

  return (
    <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
  );
}

export default ChatContextProvider;
