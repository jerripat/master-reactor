import React from "react";
//import logo from './logo.svg';
import "./App.css";

function App(props) {
  return (
   <div>
     <p>This is a paragraph</p>
     <p>This is the second paragraph</p>
     <p>Some props are here: {
       props.contentdata
       
       }</p>
     </div>
  )
}

export default App;
