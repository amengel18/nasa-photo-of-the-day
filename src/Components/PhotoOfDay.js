import React from "react"

export default function PhotoOfDay (props){
    const { nasaData } = props

    return (
        <div>
            
            <img src={nasaData.url} alt={nasaData.title}/>
            <p>{nasaData.explanation}</p>
        </div>
    )
}