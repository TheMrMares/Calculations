import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import logotypeURL from './../images/logotype.png';
const WrappedFooter = styled.footer`
    border-top: 1px solid rgba(0,0,0,0.3);
    box-shadow: 0px -2px 10px 0px rgba(0,0,0,0.2);
    background: #eee;
    text-align: center;
`;
const FooterTitle = styled.h1`
    font-size: 0.8em;
    font-weight: bold;
    text-transform: uppercase;
`;
const FooterLogotype = styled.img`
    position: relative;
    max-width: 100%;
    width: 10%;
    margin: 0;
    padding: 0;
`;
const FooterDescription = styled.p`
    font-size: 0.6em;
    text-transform: uppercase;
`;
export default class Footer extends Component {

    render(){
        return(
            <WrappedFooter className={this.props.className}>
                <FooterTitle>This is just a footer</FooterTitle>
                <FooterLogotype src={logotypeURL}></FooterLogotype>
                <FooterDescription>Check out awesome possibilities that our website gives you everytime you visit us!</FooterDescription>
            </WrappedFooter>
        );
    }
}