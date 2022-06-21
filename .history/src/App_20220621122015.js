import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutH from './components/AboutH';
import React, { useState }  from "react";
import Alert from './components/Alert';
import { BrowserRouter,Route,Routes } from "react-router-dom";



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
      document.body.style.backgroundColor="#042743";
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
<BrowserRouter>

<Navbar mode={mode}toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className='container my-3'>


    <Routes>
    <Route path="about" element={<AboutH mode={mode}/>} />
      <Route path="about">
         </Route >
       <Route path="/" element={<TextForm showAlert={showAlert}heading ="Enter the text blow" mode={mode}/>
} />
     
    </Routes>
    </div>
  </BrowserRouter>

         );
}
export default App;
































