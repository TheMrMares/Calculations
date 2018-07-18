import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const WrappedPizzaCalculator = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    padding: 10px;
`;

export default class PizzaCalculator extends Component {
    render(){
        return(
            <WrappedPizzaCalculator className={this.props.className}>
                Pizza Calc
            </WrappedPizzaCalculator>
        );
    }
}