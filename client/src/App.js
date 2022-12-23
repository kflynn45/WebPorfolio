import React from 'react';
import './App.css';

const resumeDownload = () => {
  fetch("Kevin Flynn's Resume Q1 2023.pdf").then(response => {
    response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "Kevin Flynn's Resume.pdf";
        alink.click();
    })
  })
}

function App(){
  return(
    <div class="mainHeader">
      <h1>Kevin Flynn</h1>
      <button class="resumeButton" onClick={resumeDownload}>
        Resume PDF Download
      </button>
    </div>
  );
}

export default App;