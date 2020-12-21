import React, { Component } from 'react'
import ItemRow from './ItemRow'

export default class ItemGrid extends Component {
    // state={
    //     name:{
    //         first:[1, 2, 3, 4, 5,],
    //         second:[6, 7, 8, 9, 10,],
    //         third:[11, 12, 13, 14, 15,],
    //         fourth:[16, 17, 18, 19, 20,],
    //     }    
    // }

    state={
        items:[
            [1, 2, 3, 4, 5,],
            [6, 7, 8, 9, 10,],
            [11, 12, 13, 14, 15,],
            [16, 17, 18, 19, 20,],
        ]   
    }
    render() {
        const list = this.state.items.map(
            items => (<ItemRow ItemsName={items}></ItemRow>)
        )

        return (
            <span>
               {list}
            </span> 
        )
    }
}
