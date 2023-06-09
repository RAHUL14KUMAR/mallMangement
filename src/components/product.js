import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import axios from '../axios';

function Product({id,title,price,image,description}) {

  const [show, setShow] = useState(false);
  const [ip,setIp]=useState("");
  const [{ basket },dispatch]=useStateValue();

  const addToBasket=async(e)=>{
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
    // setIp(id);
     const prod= await axios.put(`/all/api/${id}`);
     console.log(prod.data);
  }
  // console.log(ip);


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
        {/* <p class='text-center'></p> */}
        <div style={{display:'flex'}} class="mx-5">
          <button style={{margin:5}} class="btn btn-warning" onClick={addToBasket}>Add to Cart</button>
          <button style={{margin:5}} class="btn btn-success" onClick={handleShow}>details</button>
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
    display:flex;
    flex-direction:column;
    width:350px;
    border:5px solid #adb5bd;
    margin:10px;
    background:white;
`;
const Container = styled.div`
margin-left:35px;
margin-bottom:60px;
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
export default Product