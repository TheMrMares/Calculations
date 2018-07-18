import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const WrappedFooter = styled.footer`

`;

export default class Footer extends Component {

    render(){
        return(
            <WrappedFooter className={this.props.className}>
                Footer
            </WrappedFooter>
        );
    }
}