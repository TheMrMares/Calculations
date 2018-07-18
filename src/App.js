import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import styled, { css } from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

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
const WrappedApp = styled.div`
  float: left;
  width: 100%;
`;
class App extends Component {
  render() {
    return (
      <WrappedApp>
        <StyledHeader/>
        <Router>
        <div>
              <Route exact path="/" component={StyledHeader} />
              <Route path="/footer" component={StyledFooter} />
        </div>
        </Router>
        <StyledFooter/>
      </WrappedApp>
    );
  }
}

export default App;
