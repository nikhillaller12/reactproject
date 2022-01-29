import './App.css';
import Navbar from './components/Navbar';
import Texthere from './components/Texthere';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showalert=(message,jhu)=>{
    setAlert({
      msg:message,
      type:jhu
    });
    setTimeout(() => {
      setAlert(null);
    },3000);
  }
  const toggle= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#454848'
      showalert(" dark mode enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showalert(" light mode enabled","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar t="about" mode={mode} toggle={toggle}></Navbar>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route path="/"
              element={<Texthere showalert={showalert} title="Enter here something" mode={mode} toggle={toggle}/>}
          />
          <Route path='/about'
              element={<About mode={mode}/>}
          />
          </Routes>
          </div>
    </Router>
    </>
  );
}

export default App;
