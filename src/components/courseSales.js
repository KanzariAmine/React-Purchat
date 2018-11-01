import React, { Component } from 'react';
import Cours from './cours'
class Coursesales extends Component{
  constructor(props){
    super(props);
    this.state = {
      total: 0
    };
    this.sumPrice = this.sumPrice.bind(this);
  }
  sumPrice(price){
    this.setState({total: this.state.total + price})
  }
  render(){
    let courses = this.props.items.map((item, i) => {
      return <Cours name={item.name} price={item.price} key={i} sumPrice={this.sumPrice} active={item.active}/>
    });
    return( 
      <div>
        <h1>You can buy courses: </h1>
        <div id="courses">
          {courses}
          <h4 id="total">Total: <b>{this.state.total}</b></h4>
        </div>
      </div>
    );
  }
}
export default  Coursesales;