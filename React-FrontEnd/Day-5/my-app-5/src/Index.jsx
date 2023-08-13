import React, { Component } from 'react'

export default class Index extends Component {
    constructor(){
        super();
        this.state={
            item:0
        }
        console.log("constructor caledd");
    }
    componentDidMount(){
        console.log("component did mount called");
    }
    componentDidUpdate(){
     console.log("component updatedd");
    }
    componentWillUnmount(){
        alert("component is unmount");
    }
    handleClickButton=()=>{
        this.setState({item:this.state.item+1})
    }
  render() {
    console.log("render called");
   
    return (
      <div>Index
      <p>{this.item}</p>
      <button onClick={this.handleClickButton}>click here</button>
      </div>
    )
  }
}
