import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PizzaBlock from './PizzaBlock';

const WrappedPizzaCalculator = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    padding: 10px;
`;
const StyledPizzaBlock = styled(PizzaBlock)`
    float: left;
    margin: 10px;
`;
const BttnsContainer = styled.div`
    float: left;
    width: 100%;
    padding: 5px 15px;
`;
export default class PizzaCalculator extends Component {
    constructor(){
        super();
        let actualCounter = 0;
        this.state = {
            counter: actualCounter+1,
            pizzas: [{id:actualCounter}]
        }
    }
    handleCallback(target){
        this.setState((prevState) =>{
            return {
                pizzas: prevState.pizzas.filter((item, index) => {
                    if(item.id != target.props.BlockID) {
                        return true;
                    } else {
                        return false;
                    }
                })
            }
        })
    }
    renderBlock(i){
        return <StyledPizzaBlock key={i} BlockID={i} callback={this.handleCallback.bind(this)}/>
    }
    addPizza(){
        console.log(this);
        this.setState((prevState)=>{
            return {
                counter: prevState.counter+1,
                pizzas: [...prevState.pizzas, {id: prevState.counter}]
            }
        })
    }
    render(){
        return(
            <WrappedPizzaCalculator className={this.props.className}>
                <BttnsContainer>
                    <button onClick={this.addPizza.bind(this)}>Add next pizza</button>
                </BttnsContainer>
                {this.state.pizzas.map((item,index) => {
                    return this.renderBlock(item.id)
                })}
            </WrappedPizzaCalculator>
        );
    }
}