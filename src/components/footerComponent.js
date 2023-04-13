import React from 'react'
import styled from 'styled-components';

function footerComponent() {
  return (
    <Container style={{textAlign:'center'}} >
        
        <p class="p-2">please visit next time also</p>
    </Container>
  )
}
const Container=styled.div`
width:99vw;
height:8vh;
background:green;
margin-top:5px;
color:white
`
export default footerComponent