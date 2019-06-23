import React, { Component } from 'react';

 export default class Cell extends Component {
   constructor(props){
     super(props)

     this.state.color = {this.props.color}

     changeColor = (event) => {
       if(event)
       this.props.color = '#333'
     }

}

   render() {
     return (
       <div className="cell"
       style={{backgroundColor: this.state.color}}
       onClick={this.changeColor}

       >
       </div>

     )


   }



}
