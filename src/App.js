import {Container} from 'react-bootstrap'
import Home from './views/Home'
import User from './views/User';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Container>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/user/:username' component={User} />
        </Switch>
      </Container>
  );
}

export default App;
