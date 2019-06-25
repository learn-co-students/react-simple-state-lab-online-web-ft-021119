import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: {value}
        }
    }

    render() {
        return(
            <div class="cell" style={{backgroundColor: '{this.state.color}'}} onClick="{this.state.color=#333}">

            </div>
        )
    }
}