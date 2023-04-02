import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import axios from "axios";


const App = () => {
  const [inputText, setInputText] = useState("");
  const [classification, setClassification] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://127.0.0.1:5000/api/process_data/?input=${inputText}`)
      .then((response) => {
        setClassification(response.data.disease);
      })
      .catch((error) => {});
  };

  return (
    <div>
      <h1>iMed: Diagnostic Tool</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputText">Enter your symptoms:</label>
        <textarea
          id="inputText"
          value={inputText}
          onChange={handleChange}
          rows={4}
          cols={50}
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {classification && (
        <div>
          <h2>Classification Result:</h2>
          {classification != "No disease found" ?
          <p>You may have this condition: {classification.toString().toLowerCase()}</p>
            : <p>We were not able to determine your condition. Please add as many symptoms you are experiencing as possible.</p>}
        </div>
      )}
    </div>
  );
};

export default App;
