import React, { Component } from 'react'
import Item from './Item'

export default class ItemGrid extends Component {
    state={
        name:[
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
        ]
    }
    render() {
        return (
            <span>
                {[...this.state.name].map((str) =>{
                    <Item ItemName={this.state.name[str]}></Item>
                })}
            </span> 
        )
    }
}
