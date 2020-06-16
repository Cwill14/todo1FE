import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import Main from './components/Main/Main';
import LoginSignup from './components/Auth/LoginSignup';

function App() {
  return (
    <Router>
      {/* <Route exact path="/" component={Welcome} /> */}
      <Route exact path="/" component={LoginSignup} />
      <Route path="/main" component={Main} />
    </Router>
  );
}

export default App;
