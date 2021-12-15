import './App.css';
import TodoList from './components/TodoList'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DoneStuff from "./components/DoneStuff";
import UndoneStuff from './components/UndoneStuff';
import Navbar from './nav/Nav.js';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
        <Navbar></Navbar>
        <br />
        <Switch>
          <Route path="/DONE" component={DoneStuff} />
          <Route path="/UNDONE" component={UndoneStuff}/>
          <Route exact path="/" component={TodoList} />
          <Route component={TodoList} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
