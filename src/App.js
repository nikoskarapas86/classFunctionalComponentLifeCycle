import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Clock_cl from "./clock-cl";
import Clock_fn from "./clock-fn";
import Navigation from "./nav";
import PeopleList from "./PeopleList";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
//   <Route path='/topics' component={Topics}>
//   <Route path='/topics/:topicId' component={Topic} />
// </Route>
  return (
    <div className="content">
      <BrowserRouter>
      <Navigation/>
        <Routes>
           
          <Route exact path="/class" element={<Clock_cl/>} />
          <Route exact path="/function" element={<Clock_fn/>} />
          <Route exact path="/people" element={<PeopleList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
