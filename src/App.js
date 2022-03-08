import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutH from './components/AboutH';
import React, { useState }  from "react";
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
  const toggleMode =()=>{
    if(mode ==="light"){
      setMode ("dark");
      document.body.style.backgroundColor="gray";
      showAlert("Dark Mode is enable"," Success");
   //   document.title = "TextUtils - DarkMode";
    //  setInterval(() => {
   //     document.title = " This is Amazing";
    //  }, 2000);
     // setInterval(() => {
     //   document.title = " Install This";
//}, 1500);
   }
    
    else
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is enable"," Success");
    //  document.title = "TextUtils - LightMode ";
    }
  }
  return(

<>
<Navbar mode={mode}toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
      
         {/* <AboutH/> */}
            <TextForm/> 
     

        </div>
        </>

  
    
  );
}
export default App;
































