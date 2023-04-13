import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function Cart({id,title,price,image,description}) {

  const [show, setShow] = useState(false);
  const [{ basket },dispatch]=useStateValue();

  const addToBasket=(e)=>{
    e.preventDefault();
    dispatch({
      type:"ADD_TO_BASKET",
        item:{
          id, 
          title,
          price,
          image,
          description
        }
    })
  }


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
        <div style={{display:'flex'}} class="mx-5">
          <button style={{margin:2}} class="btn btn-warning" onClick={addToBasket}>Add to Cart</button>
          <button style={{margin:2}} class="btn btn-success" onClick={handleShow}>details</button>
          <Modal show={show} onHide={handleClose} backdrop='static'>
            <Modal.Header closeButton>
              <Modal.Title><h3>{title}</h3></Modal.Title>
            </Modal.Header>
            <Modal.Body class="text-success mx-2">{description}</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Description>
      </Contain>
    </Container>
  )
}
const Contain=styled.div`
    border:5px solid grey;
    margin:8px;
    height:400px;
    padding:5px;
    background:white
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // background-color: #fff;
  z-index: 10;
  margin:8px;
`;
const Image = styled.div`
margin-left:5px:
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
export default Cart