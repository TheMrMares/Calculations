import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const WrappedFuelCalculator = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    padding: 10px;
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
export default class FuelCalculator extends Component {
    constructor(){
        super()
        this.state = {
            distance: 0,
            consumption: 0,
            passangers: 0,
            constperliter: 0,
            overallCost: 0,
            overallAmount: 0,
            costPer: 0
        }
    }
    refreshAll(con, dis, pas, cpl){
        let {distance, consumption, passangers, costperliter} = this.state;
        if(dis != null){
            distance = dis;
        }
        if(con != null){
            consumption = con;
        }
        if(pas != null){
            passangers = pas;
        }
        if(cpl != null){
            costperliter = cpl;
        }
        let eat = (distance/100 * consumption);
        let cost = (eat*costperliter).toFixed(2);
        let costperpass = (cost/passangers).toFixed(2);
        this.setState((prevState) => {
            return {
                overallAmount: eat,
                overallCost: cost,
                costPer: costperpass
            }
        })
    }
    refreshConsumption(event){
        let newVal = event.target.value;
        this.setState((prevState)=> {
            return {
                consumption: newVal
            }
        })
        this.refreshAll(newVal, null, null, null);
    }
    refreshDistance(event){
        let newVal = event.target.value;
        this.setState((prevState)=> {
            return {
                distance: newVal
            }
        })
        this.refreshAll(null, newVal, null, null)
    }
    refreshPassangers(event){
        let newVal = event.target.value;
        this.setState((prevState)=> {
            return {
                passangers: newVal
            }
        })
        this.refreshAll(null, null, newVal, null)
    }
    refreshCostperliter(event){
        let newVal = event.target.value;
        this.setState((prevState)=>{
            return{
                costperliter: newVal
            }
        })
        this.refreshAll(null, null, null, newVal)
    }
    render(){
        return(
            <WrappedFuelCalculator className={this.props.className}>
                <CalcTitle>Distance (km)</CalcTitle>
                <input type='number' onChange={this.refreshDistance.bind(this)}/>
                <CalcTitle>Consumption (L/100 km</CalcTitle>
                <input type='number' onChange={this.refreshConsumption.bind(this)}/>
                <CalcTitle>Number of passangers</CalcTitle>
                <input type='number' onChange={this.refreshPassangers.bind(this)}/>
                <CalcTitle>Cost per liter</CalcTitle>
                <input type='number' onChange={this.refreshCostperliter.bind(this)}/>
                <CalcTitle>Overall gas amount (L)</CalcTitle>
                <CalcResult>{this.state.overallAmount} L</CalcResult>
                <CalcTitle>Overall gas cost ($)</CalcTitle>
                <CalcResult>{this.state.overallCost} $</CalcResult>
                <CalcTitle>How much every member has to pay? ($)</CalcTitle>
                <CalcResult>{this.state.costPer} $</CalcResult>
            </WrappedFuelCalculator>
        );
    }
}