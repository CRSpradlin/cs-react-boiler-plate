import './App.scss';
import Nav from './components/Nav';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = (): JSX.Element => {
  const navElements = [
    {name: 'Home', route: '/', active: false},
    {name: 'Projects', route: '/projects', active: false},
    {name: 'About', route: '/about', active: false}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav elements={navElements} />
          <br />
          <Switch>
            <Route path="/about">
              <div>about</div>
            </Route>
            <Route path="/projects">
              <div>projects</div>
            </Route>
            <Route path="/">
              <div>home</div>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
