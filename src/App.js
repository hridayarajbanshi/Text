import './App.css';
import Navbar from "./Navbar";
import React, {useState} from 'react';
import TextForm from './TextForm';
import About from './About';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
function App(){
const [mode, setMode] = useState("dark");

  return(
    <Router>
    <div>
      <Navbar mainName="TeXt" mode={mode}/>
     <Switch>
       <Route exact path='/textform'>
         <TextForm/>
       </Route>
       <Route exact path='/about'><About/></Route>
     </Switch>
</div></Router>
  );
}

export default App;
