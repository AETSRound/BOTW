import React, {Component} from 'react';
import styled from 'styled-components';
import "./Button.css"

export default class ItemKind extends Component{
    render(){
        return(<div>
            <button className="mainBtn">Weapon</button>
            <button className="mainBtn">Armor</button>
            <button className="mainBtn">Shield</button>
        </div>)
    }
}