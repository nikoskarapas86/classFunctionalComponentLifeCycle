
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './App.css';
import Clock_cl from './clock-cl';
import Clock_fn from './clock-fn';

function App() {
  return (
    <div className="App">
      {/* <Clock_cl/>
      <Clock_fn/> */}
<BrowserRouter>
<Switch>
  <Route exact path='/class' component={Clock_cl}/>
  <Route exact  path='/function' component={Clock_fn}/>
</Switch>
</BrowserRouter>

    </div>
  );
}

export default App;
