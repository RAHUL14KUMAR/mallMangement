import React, { useState } from 'react';
import styled from "styled-components";

function Sale({date,title,price,image,description}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
    <Contain>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Description>
        <h5 class='text-center'>{title}</h5>
        <p class='text-center'>₹ {price}</p>
        <p class='text-center'>orderDate-Time={date}</p>
      </Description>
    </Contain>
    </Container>
  )
}
const Contain=styled.div`
    display:flex;
    flex-direction:column;
    width:350px;
    border:5px solid #adb5bd;
    margin:10px;
    background:white;
`;
const Container = styled.div`
margin-left:35px
`;
const Image = styled.div`
    margin:5px;
    margin-left:5em;
    img {
        width: 180px;
        height: 250px;
    }
`;
const Description = styled.div`
 
`;
export default Sale