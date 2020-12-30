import React, { Component } from 'react'
import styled from 'styled-components'
import weapon1 from './items/weapons/BotW_Ancient_Short_Sword_Icon.png';

export default class Item extends Component {
   
    render() {
        const itemQty =  this.props.ItemName
        return (
            <span>
                <InnerItem>
                    <ImgHolder><img src={weapon1}></img></ImgHolder>
                    <TxtHolder>{this.props.ItemName}</TxtHolder>
                    {/* {this.props.ItemName} */}
                </InnerItem>
            </span>
        )
    }
}

const InnerItem = styled.div`
    width: 6 rem;
    height: 6rem;
    background: white;
    border:1px solid;
    padding: 5px;
    display:inline-block;
    border-radius:0%;
    font-size:2rem;
    margin-top: -0.5rem;
    margin-left: 1rem;
`;

const ImgHolder = styled.div`

`;

const TxtHolder = styled.div`
    position: relative;
    left:4.4rem;
    top:-1.4rem;
    width:2rem;
    text-align:center;
    font-size: 1rem;
    border:1px solid;
    word-wrap:normal;
    background-color:brown;
    color:white;
`;

