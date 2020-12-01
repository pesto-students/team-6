import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import LandingPage from './components/landingpage/LandingPage';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 50px;
  background-color: #000;
`;
function App() {
  return (
    <AppContainer>

      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/game" component={LandingPage} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
