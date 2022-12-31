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
      <div>
        <section class="banner">
          <h1 class="fade-in">Hi, my name is Kevin Flynn.</h1>
          <p class="fade-in delayed">I like to make useful, user friendly software.</p>
        </section>
        <button onClick={resumeDownload}>
          Resume PDF Download
        </button>
      </div>
  );
}

export default App;