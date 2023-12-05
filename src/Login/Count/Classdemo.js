import React, { Component } from 'react'

export default class Classdemo extends Component {
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    increment=()=>{
        this.setState(a=>{
            return{
                count:a.count+1
            }
        })
    }
    decrement=()=>{
        this.setState(a=>{
            if(a.count>0){
                return{
                    count:a.count-1
                }
            }
            else{
                return{
                    count:0
                }
            }
        })
    }
    handle=()=>{
        alert(this.state.count+" "+this.props.item+" added")
    }
  render() {
    return (
      <>
        <table>
            <tbody>
                <tr>
                    <td><img src={this.props.imgUrl} alt={this.props.item}></img></td>
                    <td><h4>{this.props.item}</h4></td>
                    <td>
                        <button onClick={this.decrement}>-</button>
                        {this.state.count}
                        <button onClick={this.increment}>+</button>
                    </td>
                    <td><button onClick={this.handle}>Add to Cart</button></td>
                </tr>
            </tbody>
        </table>
      </>
    )
  }
}
