import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const WrappedSmallText = styled.h1`
font-size: 0.7em;
text-transform: uppercase;
`;

export default class SmallText extends Component {
    render(){
        return(
            <WrappedSmallText>
                {this.props.text}
            </WrappedSmallText>
        );
    }
}