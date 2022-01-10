import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Clscom} from './Clscom';
import * as serviceworker from './serviceworker';

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>;

ReactDOM.render(<App contentdata="some Data from the props" />, document.getElementById('root'));
ReactDOM.render(
  <App contentdata="Some other data changed from previous prop" />,
  document.getElementById("data2")
);
ReactDOM.render(<Clscom  classdata="Some data from the class component" newcomponent="Some new component data"> Some data from the children</Clscom> ,document.getElementById("Clscom")); 

 serviceworker.unregister();
