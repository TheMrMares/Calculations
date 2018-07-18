import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const WrappedNavigation = styled.ul`

`;

export default class Navigation extends Component {
    render(){
        return(
            <WrappedNavigation className={this.props.className}>
                nav
            </WrappedNavigation>
        );
    }
}