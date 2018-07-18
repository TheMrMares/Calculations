import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import styled, { css } from 'styled-components';

const WrappedItem = styled.li`
    float: left;
    border-right: 1px solid rgba(0,0,0, 0.2);
`;
const StyledLink = styled(Link)`
    font-family: Helvetica;
    float: left;
    padding: 6px 45px;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    transition: 0.25s ease;
    &:hover {
        background: rgba(0,0,0,0.13);
    }
`;
export default class Item extends Component {
    render(){
        return(
            <WrappedItem className={this.props.className}>
                <StyledLink to={this.props.to}>{this.props.name}</StyledLink>
            </WrappedItem>
        );
    }
}