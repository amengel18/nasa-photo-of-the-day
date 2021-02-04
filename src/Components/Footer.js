import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
    color: purple;
    font-weight: bold;
    text-align: center;
`

export default function Footer (props){
    const { nasaData } = props

    return(
        <StyledFooter> 
            <p>{nasaData.hdurl}</p>
        </StyledFooter>
    )
}