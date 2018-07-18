import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import styled, { css } from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
import Fuel from './components/Fuel';

const cssMainPart = `
  float: left;
  width: 100%;
`;
const StyledHeader = styled(Header)`
  ${cssMainPart}
`;
const StyledFooter = styled(Footer)`
  ${cssMainPart}
`;
const StyledPizza = styled(Pizza)``;
const StyledFuel = styled(Fuel)``;
const WrappedApp = styled.div`
  float: left;
  width: 100%;
  background: #eee;
  min-height: 100vh;
  button {
    padding: 5px 25px;
    text-transform: uppercase;
    font-size: 0.7em;
  }
  input {
    padding: 5px;
    border-radius: 5px;
  }
`;
const RouterHolder = styled.div`
  float: left;
  ${StyledPizza}, ${StyledFuel} {
    ${cssMainPart}
  }
`;

class App extends Component {
  render() {
    return (
      <WrappedApp>
        <Router>
          <RouterHolder>
            <StyledHeader/>
              <Route exact path="/" component={StyledPizza} />
              <Route path="/fuel" component={StyledFuel} />
            <StyledFooter/>
          </RouterHolder>
        </Router>
      </WrappedApp>
    );
  }
}

export default App;
