import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const WrappedFuelCalculator = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    padding: 10px;
`;

export default class FuelCalculator extends Component {
    render(){
        return(
            <WrappedFuelCalculator className={this.props.className}>
                Fuel Calc
            </WrappedFuelCalculator>
        );
    }
}