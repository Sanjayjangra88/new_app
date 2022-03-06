import React, { Component } from "react";
class SimpleFunction extends Component{
    state ={
        s1: "React11111111144444",
        s2:"Javacript",
        s3:"Nord",
    };
    showString =()=>{
        let {s1,s2,s3}=this.state;
        return( <React.Fragment> 
               <h1>{s1}</h1>
               <h1>{s2}</h1>
               <h1>{s3}</h1>
   
               </React.Fragment> );
    };
    render(){
        return <React.Fragment>{this.showString()}</React.Fragment>;
     
        
    }
}
export default SimpleFunction;