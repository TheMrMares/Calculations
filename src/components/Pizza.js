import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import SmallTitle from './SmallTitle';
import SmallText from './SmallText';
import PizzaCalculator from './PizzaCalculator';

const WrappedPizza = styled.section`
    padding: 10px;
`;
const StyledPizzaCalculator = styled(PizzaCalculator)`
    float: left;
    width: 90%;
    margin: 20px 5%;
`;

export default class Pizza extends Component {
    render(){
        return(
            <WrappedPizza className={this.props.className}>
                <SmallTitle text='Pizza Calculator'/>
                <SmallText text='Set needed data to calcualte price for square centimeter of your favourite pizza'/>
                <StyledPizzaCalculator/>
            </WrappedPizza>
        );
    }
}