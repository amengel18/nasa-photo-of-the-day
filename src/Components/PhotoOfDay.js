import React from "react"
import styled from "styled-components"

const StyledPhoto = styled.div`
   color: navy;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-weight: bold;
`


export default function PhotoOfDay (props){
    const { nasaData } = props

    return (
        <StyledPhoto>
            
            <img src={nasaData.url} alt={nasaData.title}/>
            <p>{nasaData.explanation}</p>
        </StyledPhoto>
    )
}