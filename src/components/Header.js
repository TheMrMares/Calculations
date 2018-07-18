import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import logotypeURL from './../images/logotype.png';
import Navigation from './Navigation';

const cssMainPart = `
  float: left;
  width: 100%;
`;

const WrappedHeader = styled.header`
    background: #eee;
    text-align: center;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.2);
`;
const Logotype = styled.img`
    position: relative;
    max-width: 100%;
    width: 30%;
`;
const LogotypeContainer = styled.div`
    ${cssMainPart}
`;
const StyledNavigation = styled(Navigation)`
    ${cssMainPart}
`;

export default class Header extends Component {

    render(){
        return(
            <WrappedHeader className={this.props.className}>
                <LogotypeContainer>
                    <Logotype src={logotypeURL}/>
                </LogotypeContainer>
                <StyledNavigation/>
            </WrappedHeader>
        );
    }
}