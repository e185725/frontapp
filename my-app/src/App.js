import logo from './logo.svg';
import './App.css';
import Form from "./Form"
import Form2 from "./Form2"
import ApiFetch from './ApiFetch';
import React from "react";
import { render } from 'react-dom';
const App = () => {

  return (
    <div>
      <Form />
      <Form2 /> 
      <ApiFetch />
    </div>
  );
  
}

export default App;
