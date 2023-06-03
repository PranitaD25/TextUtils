/**
 * textutils-
 * -tells no of words in text
 * -removes extra spaces from text
 * -capitalize text
 * -lowercase text
 * 
 */
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  //whether dark mode is enabled or not
  const[mode,setMode]=useState('light');

  const[alert,setAlert]=useState(null)


  const showAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)

  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  

  const toggleMode=(cls)=>{
    console.log(cls)

    removeBodyClasses()
    document.body.classList.add('bg-'+cls)

    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
      // document.title="TextUtils - Dark Mode"
      // setInterval(()=>{
      //   document.title="TextUtils - is Amazing"
      // },2000)
      // setInterval(()=>{
      //   document.title="Install TextUtils Now"
      // },1500)
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      // document.title="TextUtils - Light Mode"
    }
    
  }


  return (
  <>
 <Router> 
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

  <Alert alert={alert}/>

  <div className="container my-3">
   <Switch> 
    {/*exact match recommended- 
     /users --> Component 1
    /users/home --> Component 2 */}
           <Route exact path="/about"> 
             <About  mode={mode}/> 
             </Route> 
           <Route exact path="/"> 
          <TextForm showAlert={showAlert} heading="Try TextUtils- Word Counter,Character counter,Remove extra spaces" mode={mode}/>
           </Route> 
     </Switch> 
  </div>
  </Router> 
  </>

  ); 
}

export default App;
