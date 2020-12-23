import React, { Component } from 'react'

class Home extends Component {
  
  
  handleReq = async () => {

    const res = await fetch(`http://localhost:8080/login`, {
      method:"GET",    
      headers:{ 
        "Content-Type":"application/json" 
      }
    })

    const resData = await res.json();
    console.log(resData);
  }
  
  render() {
    return (
      <div className="Home">
        Home

        <button onClick={this.handleReq}>CLICK</button>
      </div>
    )
  }
}

export default Home; 