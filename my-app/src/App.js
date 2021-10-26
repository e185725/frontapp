import logo from './logo.svg';
import './App.css';
import Form from "./Form"
import Form2 from "./Form2"
import Form3 from "./Form3"
import ApiFetch from './ApiFetch';
import React from "react";
import { render } from 'react-dom';
import Post from './Post';
const App = () => {

  return (
    <div>
      <Form />
      <Form2 /> 
      <Form3 />
      <ApiFetch />
    </div>
  );
  
}

export default App;
