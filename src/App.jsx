// import React from 'react';
import Product from "./Product/Product"
import "./App.css"
import { Component } from "react"

class App extends Component {
  
  state = {
    user: [
      {id: 1, title: "sim charger", image: "images/img1.jpg", count: 5},
      {id: 2, title: "sim handzferi", image: "images/img2.jpg", price: 180, count: 13},
      {id: 3, title: "hub tesco", image: "images/img3.jpg", price: 20, count: 2},
      {id: 4, title: "fandak charge", image: "images/img4.jpg", price: 100, count: 45}

    ]

  }

  render() {
      return (
        <div className="container">
            {this.state.user.map((user) => (
              <div key={user.id}>
                <Product {...user}/>
              </div>
            ))}
          
        {/* <Product {...allProducts[0]}>
          <button className="btnoff"> Off (50%) </button>
        </Product>

        <Product {...allProducts[1]}>
          <button className="btnoff"> Off (90%) </button>
        </Product>

        <Product {...allProducts[2]}>
          <h2> takhfif nadarim </h2>
        </Product>

        <Product {...allProducts[3]}>
          <button className="btnoff"> Off (10%) </button>
        </Product> */}

      </div>
      )
  }
      

  
}





export default App
