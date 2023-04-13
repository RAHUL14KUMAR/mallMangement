import React, { useState } from 'react';
import styled from "styled-components";

function DeleteCart({id,title,image,price}) {
  return (
    <Container>
        <Contain>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Description>
        <h5 class='text-center'>{title}</h5>
        <p class='text-center'>{id}</p>
        <p class='text-center'>{price}</p>
      </Description>
      </Contain>
    </Container>
  )
}
const Contain=styled.div`
    margin:2px;
    height:400px;
    padding:5px;
    position:relative;
    top:-15px
`;
const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin:8px;
`;
const Image = styled.div`
  margin-left:5px:
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex: 0.3;
  img {
    width: 180px;
    height: 250px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
`;
export default DeleteCart