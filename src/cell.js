import React, { Component } from 'react';


export default class Cell extends Component {

    constructor(value) {
        super(value)
        this.state = {
            color: {value}
        }
    }

    render() {
        return(
            <div className="cell" style={{backgroundColor: '{fff}'}} onClick="{this.setState().color=#333}">
                
            </div>
        )
    }
}