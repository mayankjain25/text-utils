
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {

  const[mode,setMode] = useState('light')

  const toggleMode=()=>{
    console.log("toggle triggered");
    if(mode==='light') {setMode('dark');document.body.style.backgroundColor="#384761"}
    else {setMode('light');document.body.style.backgroundColor="white"}
  }



  return (
   <>
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode}/>

        <div className="container">
          <TextForm heading="Enter the text" mode={mode}  /> 
          {/* <About /> */}

        </div>
  
   </>
   
  );
}

export default App;
