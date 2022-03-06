import React, { Component } from "react";
class SimpleList extends Component{
    state ={
        nums: [11,22,33,44,55,99,78,66,77,88],
    };
    render(){
        let {nums} = this.state;
        let nums1=[...nums];
        nums1.sort((n1,n2) => n2 - n1);
        return ( 
        <ul>
            {nums1.map((n1)=>(
                <li>{n1}</li>
             ))}
        </ul>
        );
    }
}
export default SimpleList;