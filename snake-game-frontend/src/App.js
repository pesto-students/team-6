import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "./components/LandingPage";
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
const Header = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;
const H1 = styled.h1`
  font-size: 24px;
  padding: 10px;
  color: #fff;
  text-align: center;
  margin: 5px auto;
  margin-left: 20px;
`;
function App() {
  return (
    <AppContainer>
      <Header>
        <H1>SNAKY</H1>
      </Header>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
