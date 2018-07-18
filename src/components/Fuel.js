import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import SmallTitle from './SmallTitle';
import SmallText from './SmallText';
import FuelCalculator from './FuelCalculator';

const WrappedFuel = styled.section`
    padding: 10px;
`;
const StyledFuelCalculator = styled(FuelCalculator)`
    float: left;
    width: 90%;
    margin: 20px 5%;
`;
export default class Fuel extends Component {
    render(){
        return(
            <WrappedFuel className={this.props.className}>
                <SmallTitle text='Fuel Cost per person calculator'/>
                <SmallText text='Just set how many people will be in car, car fuel usage and check how much everyone should pay'/>
                <StyledFuelCalculator/>
            </WrappedFuel>
        );
    }
}