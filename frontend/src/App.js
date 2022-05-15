
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './component/Main'
import Chat from './component/Chat'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
