import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Clock_cl from "./clock-cl";
import Clock_fn from "./clock-fn";
import Navigation from "./nav";
import PeopleList from "./PeopleList";
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentPropTypes from "./ComponentPropTypes";
import Home from "./Home";
import PersonList from "./PersonList";
function App() {
//   <Route path='/topics' component={Topics}>
//   <Route path='/topics/:topicId' component={Topic} />
// </Route>
  return (
    <div className="content">
      <ComponentPropTypes name="nikos" age={35} />
      <BrowserRouter>
      <Navigation/>
        <Routes>
           
          <Route exact path="/class" element={<Clock_cl/>} />
          <Route exact path="/function" element={<Clock_fn/>} />
          <Route exact path="/people" element={<PeopleList/>} />
          <Route exact path="/personList" element={<Home/>} >
             <Route path="persons" element={<PersonList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
