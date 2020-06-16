import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from './privateRoute';
import Main from './components/Main/Main';
import LoginSignup from './components/Auth/LoginSignup';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginSignup} />
      <PrivateRoute path="/main" component={Main} />
    </Router>
  );
}

export default App;
