import React, { Component } from 'react'
import styled from 'styled-components'
import "./Button.css"


export default class Item extends Component {
    render() {
        return (<span>
            <InnerBtn className="btn">
                <InnerItem>
                    <TxtHolder>{this.props.ItemName}</TxtHolder>
                    <ImgHolder src={this.props.ImgName} className="imgC"></ImgHolder>
                </InnerItem>
                
            </InnerBtn>
        </span>)
    }
}

const InnerBtn = styled.button`
    width:7rem;
    height:7rem;
    margin:1rem;
    align-items:center;
    background-color:black;
    border:1px solid white;
    
`;
const ImgHolder=styled.img`
    width:5.8rem;
    object-fit: cover;
`;

const InnerItem = styled.div`
    width: 6rem;
    height: 6rem;
    background: white;
    border:1px solid;
    font-size:2rem;
    background-color:black;
`;

const TxtHolder = styled.div`
    position: relative;
    left:4.3rem;
    top:5.2rem;
    width:2rem;
    margin-bottom:-1rem;
    text-align:center;
    font-size: 1rem;
    border:1px solid white;
    word-wrap:normal;
    background-color:black;
    color:white;
    
`;

