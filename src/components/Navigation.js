import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Item from './Item';
const WrappedNavigation = styled.ul`
    list-style-type: none;
    float: left;
    margin: 0;
    padding: 0;
`;

export default class Navigation extends Component {
    renderItem(name, path){
        return <Item to={path} name={name}></Item>
    }
    render(){
        return(
            <WrappedNavigation className={this.props.className}>
                {this.renderItem('Pizza Cost Calculator','/')}
                {this.renderItem('Fuel Cost Calculator','/fuel')}
            </WrappedNavigation>
        );
    }
}