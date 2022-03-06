import React, { Component } from "react";
class LargerNum extends Component{
    state ={
      x:9,
      y:7,
    };
   isPrime =(num)=>{
       for(let i=2;i<num;i++){
           if (num%i==0)return false;
       }
       return true;
   };
    render(){
        let {x,y}=this.state;
        return (<React.Fragment>
            Number 1 is {x} prime is{" "+ this.isPrime(x)}<br/>
            Number 2 is {y} prime is{" "+ this.isPrime(y)}<br/>
            Sum is {x+y}<br/>
            Larger is {x>y ? x:y}
            </React.Fragment>
     
        );
    }
}

export default LargerNum;