import React, { Component } from 'react'
import styled from 'styled-components'

export default class Item extends Component {
   
    render() {
        return (
            <span>
                <InnerItem>{this.props.ItemName}</InnerItem>
            </span>
        )
    }
}

const InnerItem = styled.div`
    width: 5rem;
    height: 5rem;
    background: white;
    border:2px solid;
    padding: 5px;
    display:inline-block;
`;