import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from "axios";
/*
const App = () => {
  const [inputText, setInputText] = useState('');
  const [classification, setClassification] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = mockClassifier(inputText);
    setClassification(result);
  };

  //const mockClassifier = async(text) => {
    // Replace this with your own classifier function
//const {data} = await axios.request()
    return text.length % 2 === 0 ? 'Flu' : 'Cancer';
  };

  return (
    <div>
      <h1>Text Classifier</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputText">Enter your text:</label>
        <textarea
          id="inputText"
          value={inputText}
          onChange={handleChange}
          rows={4}
          cols={50}
        ></textarea>
        <button type="submit">Classify</button>
      </form>
      {classification && (
        <div>
          <h2>Classification Result:</h2>
          <p>{classification}</p>
        </div>
      )}
    </div>
  );
};

export default App; */


const App = () => {
  const [inputText, setInputText] = useState('');
  const [classification, setClassification] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:5000/imed/get-disease/?input=${inputText}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('lets go');
        setClassification(data.message);
      })
      .catch((error) => {
        // handle errors here
      });
    //const result = mockClassifier(inputText);

  };

  const mockClassifier = (text) => {
    // Replace this with your own classifier function
    return text.length % 2 === 0 ? 'Flu' : 'Cancer';
  };


  return (
    <div>
      <h1>Text Classifier</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputText">Enter your text:</label>
        <textarea
          id="inputText"
          value={inputText}
          onChange={handleChange}
          rows={4}
          cols={50}
        ></textarea>
        <button type="submit">Classify</button>
      </form>
      {classification && (
        <div>
          <h2>Classification Result:</h2>
          <p>{classification}</p>
        </div>
      )}
    </div>
  );
};
  
  export default App;