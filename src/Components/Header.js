// ICE
import React from "react";
import styled from "styled-components"

const StyledHeader = styled.div`
    color: navy;
    font-weight: bold;
    text-align: center;
`

export default function Header (props) {
    const { nasaData } = props

    return (
        <StyledHeader>
            <h1>Nasa Photo of the Day</h1>
            <p>{nasaData.date}</p>
            <p>{nasaData.title}</p>
        </StyledHeader>
    )
}