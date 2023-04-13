import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './headerComponent';
import Footer from './footerComponent';
import {addProduct} from '../service/addProduct'
function AddProduct() {
    const navigate=useNavigate();

    const [title,setTitle]=useState('');
    const [image,setImage]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');

    const deliver=async()=>{
      if(image!=null&&title!=null&&price!=null&&description!=null){
        const resp=await addProduct({title,image,price,description});
        console.log(resp);
        alert("product has been added");
      }
    }
  return (
    <Con>
      <Header/>
        <Container>
        <Main>
          <Image>
            <img src='https://img.freepik.com/free-vector/sales-consulting-concept-illustration_114360-9025.jpg?size=626&ext=jpg&ga=GA1.2.722856608.1680434315&semt=ais'/>  
          </Image>
            <FormContainer>
            <InputContainer>
                <label for="fm" class='text-success'>Title</label>
                <input  id="fm" type='text' class='border border-danger' onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </InputContainer>
            <InputContainer>
                <label for="ph" class='text-success'>Image</label>
                <input id='ph' placeHolder='image url paste here' type='text' class='border border-danger' onChange={(e)=>setImage(e.target.value)} value={image}/>
            </InputContainer>
            <InputContainer>
                <label for='fn' class='text-success'>Price</label>
                <input id='fn' type='text' class='border border-danger' onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </InputContainer>
            <InputContainer>
                <label for='area' class='text-success'>Description</label>
                <input id='area' type='text' class='border border-danger' onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </InputContainer>
            <button type="button" class="btn btn-danger" onClick={deliver}>Add The Product</button> 
            </FormContainer>
        </Main> 
        </Container>   
    </Con>
  )
}
const Con=styled.div`
width:100%;
height:100vh;
`
const Container=styled.div`
width:100%;
max-width:800px;
margin:auto;
position:relative;
`
const Main=styled.div`
padding:25px;
display:flex;
`
const Image=styled.div`
border:5px solid grey;
border-right:none;
height:54.4vh;
margin-top:8em;
background:white;
img{
    width:300px;
    height:50vh;
}
`
const FormContainer=styled.form`
border:5px solid grey;
width:55%;
min-width:400px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:15px;
background-color:#fff;
margin-top:8em;
margin-bottom:3em;
border-left:none;
`
const InputContainer=styled.div`
width:100%;
padding:10px;
input{
    width:95%;
    height:33px;
    padding-left:5px;
    border-radius:5px;
    margin-top:5px;
    &:hover{
      border:2px solid black;
    }
}
`
export default AddProduct