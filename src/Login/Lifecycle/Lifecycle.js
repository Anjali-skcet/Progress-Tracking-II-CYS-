import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state={ value: 'Initial value'};
        console.log('Constructor');
    }

    componentDidMount(){
        console.log('Component did mount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component did update');
    }

    componentWillUnmount(){
        console.log('Component will unmount');
    }

    handle=()=>{
        this.setState({ value:'Updated value' });
    };

    render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.handle}>Update Value</button>
      </div>
    );
  }
}

export default Lifecycle;