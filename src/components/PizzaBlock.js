import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const WrappedPizzaBlock = styled.div`
    margin: 0;
    padding: 5px 15px;
    border: 1px solid rgba(0,0,0,0.1);
    background: white;
`;
const CalcTitle = styled.h1`
    font-size: 0.8em;
    font-weight: normal;
    padding: 0px;
    margin: 5px 0px;
`;
const CalcResult = styled.p`
    color: red;
    font-weight: bold;
    margin: 5px 0px;
    padding: 0px;
`;

export default class PizzaBlock extends Component {
    constructor(){
        super()
        this.state = {
            price: 0,
            radius: 0,
            surface: 0,
            finalPrice: 0,
            finalCm: 0
        }
    }
    passData({target}){
        this.props.callback(this)
    }
    refreshFinal(rad, pri){
        let {price, radius} = this.state;
        if(rad != null){
            radius = rad;
        }
        if(pri != null){
            price = pri;
        }
        let surface = Math.PI * (radius*radius);
        let finalVal = (price/surface).toFixed(2)
        if(surface == 0){
            finalVal = 0;
        }
        let howMany = (1/finalVal).toFixed(2);
        this.setState((prevState)=> {
            return {
                surface: surface.toFixed(2),
                finalPrice: finalVal,
                finalCm: howMany
            }
        })
    }
    radiusChange(event){
        let newVal = event.target.value;
        this.setState((prevState)=>{
            return {
                radius: newVal
            }
        })
        this.refreshFinal(newVal, null);
    }
    priceChange(event){
        let newVal = event.target.value;
        this.setState((prevState)=>{
            return {
                price: newVal
            }
        })
        this.refreshFinal(null, newVal);
    }
    render(){
        return(
            <WrappedPizzaBlock className={this.props.className}>
                <CalcTitle>Pizza's {this.props.BlockID} radius (cm)</CalcTitle>
                <input type='number' onChange={this.radiusChange.bind(this)}/>
                <CalcTitle>Pizza's {this.props.BlockID} price ($)</CalcTitle>
                <input type='number' onChange={this.priceChange.bind(this)}/>
                <CalcTitle>Pizza surface (CM<sup>2</sup>)</CalcTitle>
                <CalcResult>{this.state.surface} CM<sup>2</sup></CalcResult>
                <CalcTitle>1 CM cost ($)</CalcTitle>
                <CalcResult>{this.state.finalPrice} $</CalcResult>
                <CalcTitle>How many CM for 1$</CalcTitle>
                <CalcResult>{this.state.finalCm} $</CalcResult>
                <button onClick={this.passData.bind(this)}>Remove pizza</button>
            </WrappedPizzaBlock>
        );
    }
}