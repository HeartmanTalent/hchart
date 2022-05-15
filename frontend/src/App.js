
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './component/Main'
import Chat from './component/Chat'
import ContactContextProvider from "./contexts/contactContext";
import ChatContextProvider from "./contexts/chatContext";
import MessagesContextProvider from "./contexts/messagesContext";

function App() {
  return (
    <div className="App">
      <ContactContextProvider>
        <ChatContextProvider>
          <MessagesContextProvider >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="chat" element={<Chat />} />
              </Routes>
            </BrowserRouter>
          </MessagesContextProvider>
        </ChatContextProvider>
      </ContactContextProvider>
    </div >
  );
}

export default App;
