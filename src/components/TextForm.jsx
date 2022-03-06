import React,{useState} from 'react'


export default function TextForm(props) {
  const handelUpperCase=()=>{
  //  console.log("UpperCase was clicked");
    let newText =text.toUpperCase();
    setText(newText);
  }
  const handelLowerCase=()=>{
    //  console.log("UpperCase was clicked");
      let newText =text.toLowerCase();
      setText(newText);
    }
  const handelOnChange=(event)=>{
  //  console.log("UpperCase was clicked"+text);
    
    setText(event.target.value)
  }
  const clear=()=>{
    //  console.log("UpperCase was clicked"+text);
      setText("");
    
    }
    const handelCopy=()=>{
      //  console.log("UpperCase was clicked"+text);
       var text=document.getElementById("myBox"); 
       text.select();
       
      document.execCommand("copy");
      }
      
    const handelExtraSpace=()=>{
      let newText=text.split(/[ ]+/)
       setText(newText.join(" "));
       
      document.execCommand("copy");
      }
      
  const [text,setText] = useState("Enter text here");

 // setText("Sanjay");
  return (
    <>
    <div className='container'style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
 
  <textarea className = "form-control" id="myBox" value={text} onChange={handelOnChange}style={{backgroundColor:props.mode=== 'dark'?'gray':'white',color: props.mode=== 'dark'?'white':'black'}} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1"onClick={handelUpperCase}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1 my-1"onClick={handelLowerCase}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1 my-1"onClick={clear}>All Clear</button>
<button className="btn btn-primary mx-1 my-1"onClick={handelCopy}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1"onClick={handelExtraSpace}>Handel Space</button>

</div>
<div className='container my-3'style={{color: props.mode=== 'dark'?'white':'black'}}>
  <h2>Your text Summery</h2>
  <p>{text.split(" ").length} word and {text.length} characters </p>
  <p>{0.008 * text.split(" ").length} Minuets read </p>
</div>
</>
  )
}
