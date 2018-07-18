import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const WrappedPizzaBlock = styled.div`
    margin: 0;
    padding: 5px;
    border: 1px solid rgba(0,0,0,0.1);
`;
const CalcTitle = styled.h1`
    font-size: 1em;
`;
const CalcInput = styled.input`

`;
const Bttn = styled.button`

`;

export default class PizzaBlock extends Component {
    passData({target}){
        this.props.callback(this)
    }
    render(){
        return(
            <WrappedPizzaBlock className={this.props.className}>
                <CalcTitle>Pizza's {this.props.BlockID} radius</CalcTitle>
                <CalcInput type='number'/>
                <CalcTitle>Pizza's {this.props.BlockID} price</CalcTitle>
                <CalcInput type='number'/>
                <CalcTitle>Price for square CM</CalcTitle>
                <Bttn onClick={this.passData.bind(this)}>Remove pizza</Bttn>
            </WrappedPizzaBlock>
        );
    }
}