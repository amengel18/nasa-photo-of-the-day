import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header"
import PhotoOfDay from "./Components/PhotoOfDay"
import Footer from "./Components/Footer"
import styled from "styled-components"

const StyledApp = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`

function App() {
  const [ nasaData, setNasaData ] = useState([])

  const fetchPhoto = () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=LeHsFcV7QCYsQpnhja91M5wlvOQ461WLzH45tL6J")
      .then(response => {
        console.log(response)
        setNasaData(response.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(fetchPhoto, [])
  

  return (
    <StyledApp>
      
       {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!*/}
        <Header nasaData={nasaData}/>
        <PhotoOfDay nasaData={nasaData}/>
        <Footer nasaData={nasaData}/>
      
    </StyledApp>
  );
}

export default App;
