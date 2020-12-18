import React, { Component } from 'react'
import Item from './Item'

export default class ItemGrid extends Component {
    state={
        name1:'A',
        name2:'B',
        name3:'C',
        name4:'D',
    }
    render() {
        return (
            <span>
                <Item ItemName={this.state.name1}></Item>
                <Item ItemName={this.state.name2}></Item><br></br>
                <Item ItemName={this.state.name3}></Item>
                <Item ItemName={this.state.name4}></Item>
            </span>
        )
    }
}
