import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const WrappedSmallTitle = styled.h1`
    font-size: 0.8em;
    font-weight: bold;
    text-transform: uppercase;
`;

export default class SmallTitle extends Component {
    render(){
        return(
            <WrappedSmallTitle>
                {this.props.text}
            </WrappedSmallTitle>
        );
    }
}