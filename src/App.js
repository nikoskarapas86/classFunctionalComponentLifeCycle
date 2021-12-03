import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Clock_cl from "./clock-cl";
import Clock_fn from "./clock-fn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/class" element={<Clock_cl/>} />
          <Route exact path="/function" element={<Clock_fn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
