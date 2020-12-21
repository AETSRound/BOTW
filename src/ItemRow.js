import React, {Component} from 'react'
import Item from './Item'

export default class ItemRow extends Component{
    // state = {
    //     item:[]
    // }
    render(){
        const itemList = this.props.ItemsName.map(
            item => (<Item ItemName={item} key={item}></Item>)
        )

        return(
            <div>
                {itemList}
            </div>
        )
    }
}