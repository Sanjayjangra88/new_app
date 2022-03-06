import React, { Component } from "react";
class MyComp extends Component{
    state ={
        s1: "React",
        s2:"Javacript",
        s3:"Nord",
    };
    render(){
        let {s1,s2,s3}=this.state;
        return <React.Fragment> <h1>{s1}</h1>
               <h1>{s2}</h1>
               <h1>{s3}</h1>
   
               </React.Fragment> 
        
    }
}
export default MyComp;