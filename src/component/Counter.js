import React from 'react';
import {connect} from 'react-redux'
import './Counter.css';

import { increment,decrement,reset, checkvalue } from '../actions';
class Counter extends React.Component{

    static mapStatetoProps=(state)=>{
        return{
            counter:state.counter,
            countarray:state.countarray,
            value:state.value
        }
    };
    
    static mapDispatchToProps=(dispatch)=>{
        return{
            increment:()=>dispatch(increment()),
            decrement:()=>dispatch(decrement()),
            reset:()=>dispatch(reset()),
            checkvalue: value => dispatch(checkvalue(value))
        }
    };
  constructor(){
      super()
      this.state = {newvalue:''};
      this.handleChange = this.handleChange.bind(this);
      this.clearvalue = this.clearvalue.bind(this);
  }
  
  handleChange(event) {
    this.setState({newvalue: event.target.value});
  }
  clearvalue() {
    this.setState({newvalue: ''});
  }
    render(){
        const {increment,decrement,reset,checkvalue}=this.props;
        console.log(this.props.countarray)
        
        return(
            <div className='maindiv'>
               
                
                <div>
                <h2>Counter: {this.props.counter}</h2>
                    <button className="button" onClick={increment}>Increment</button>
                    <button className="button" onClick={reset}>Reset</button>
                    <button className="button" onClick={decrement}>Decrement</button>
                    <br />
                    <input className='input' type="text" value={this.state.newvalue} onChange={this.handleChange}  placeholder="Enter number to search" />
                    <br />
                    <button className="button button1" onClick={() => checkvalue(this.state.newvalue)}>Check Value</button>
                    <button className="button button1" onClick={this.clearvalue}>Clear Value</button>
                </div>
              

                
            </div>
        )
    }
}
export default connect(
    Counter.mapStatetoProps,
    Counter.mapDispatchToProps
)(Counter)
