import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Detail";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
