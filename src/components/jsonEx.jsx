import React, { Component } from "react";

class JsonEx extends Component{
    state = {
        students:[
        {name:"williom", math:34, english: 36},
        {name:"goerge", math:24, english: 31},
        {name:"kathline", math:36, english: 41},
        {name:"shopia", math:45, english: 37},
        {name:"tommy", math:22, english: 19},
    ],
    };
  getRowStyle = (m1,m2) => ( m1+ m2 >= 60  ? "bg-success" : "bg-danger");

    render(){
        let {students}=this.state;
        const sts = students.filter((s1)=>s1.math+s1.english >= 50);
        return( 
          <div className="container">
            <div className="row border bg-dark text-white">
                  <div className="col-6 border">NAME</div>
                  <div className="col-3 border text-center">MATH</div>
                  <div className="col-3 border text-center">ENGLISH</div>
            </div>

            {sts.map((st) => {
              let {name,math,english} = st;
            return (
              <div 
              className={" row border "+ this.getRowStyle(st.math,st.english)}
              >
                     <div className="col-6 border">{st.name}</div>
                     <div className="col-3 border text-center">{st.math}</div>
                     <div className="col-3 border text-center">{st.english}</div>
              </div>
            );
            })}

         </div>
        );
        
    }
    }
    

export default JsonEx;