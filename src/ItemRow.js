import React, {Component} from 'react'
import Item from './Item'

export default class ItemRow extends Component{
    render(){
        const itemList = this.props.ItemsName.map(
            item =>(<Item ItemName={item} ImgName={"./items/"+item+".png"} key={item}></Item>)
        )
        return(<div>{itemList}</div>)
    }
}