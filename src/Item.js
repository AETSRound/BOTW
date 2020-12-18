import React, { Component } from 'react'

export default class Item extends Component {
   
    render() {
        return (
            <span>
                {this.props.ItemName}
            </span>
        )
    }
}
