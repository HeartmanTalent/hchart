import { createContext, useReducer } from "react";

export const MessagesContext = createContext({
  messages: [],
  setMessages: (messages) => { },
});

function mesagesReducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload;
    default:
      return state;
  }
}

function MessagesContextProvider({ children }) {
  const [messagesState, dispatch] = useReducer(mesagesReducer, [{ id: 4, avatar: "", fname: "Bhusi", lname: "Ten", message: "Hie Mate" }]);

  function setMessages(messages) {
    dispatch({ type: "SET", payload: messages });
  }

  const value = {
    messages: messagesState,
    setMessages: setMessages,
  };

  return (
    <MessagesContext.Provider value={value}>{children}</MessagesContext.Provider>
  );
}

export default MessagesContextProvider;
