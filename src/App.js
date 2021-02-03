import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header"
import PhotoOfDay from "./Components/PhotoOfDay"
import Footer from "./Components/Footer"


function App() {
  const [ nasaData, setNasaData ] = useState([])

  const fetchPhoto = () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response)
        setNasaData(response.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(fetchPhoto, [])
  
  return (
    <div className="App">
      
       {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!*/}
        <Header nasaData={nasaData}/>
        <PhotoOfDay nasaData={nasaData}/>
        <Footer nasaData={nasaData}/>
      
    </div>
  );
}

export default App;
