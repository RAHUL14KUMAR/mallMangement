import React,{useState} from 'react'
import{useNavigate}from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import styled from 'styled-components'
import Header from './headerComponent'
import Footer from './footerComponent'

function Address() {
    const[{},dispatch]=useStateValue();
    const navigate=useNavigate();

    const [fullName,setFullName]=useState('');
    const [phone,setPhone]=useState('');
    const [flat,setFlat]=useState('');
    const [area,setArea]=useState('');
    const [landmark,setLandmark]=useState('');
    const [city,setCity]=useState('');
    const [state,setState]=useState('');

    const deliver=(e)=>{
        e.preventDefault();
        dispatch({
            type:'SET_ADDRESS',
            item:{
                fullName,
                phone,
                flat,
                area,
                landmark,
                city,
                state,
            }
        });
        navigate('/paymentOrder')
    }
  return (
    <div>
      <Header/> 
      <Container>
        <Main>
            <Image>
                <img src='https://img.freepik.com/free-vector/coronavirus-delivery-preventions-concept-illustration_114360-1754.jpg?size=626&ext=jpg&ga=GA1.1.722856608.1680434315&semt=sph'/>
            </Image>
            <FormContainer>
            <InputContainer>
                <label for="fm" class='text-success'>FullName</label>
                <input  id="fm" type='text' class='border border-danger' placeholder='john smith' onChange={(e)=>setFullName(e.target.value)} value={fullName}/>
            </InputContainer>
            <InputContainer>
                <label for="ph" class='text-success'>PhoneNumber</label>
                <input id='ph' type='text' class='border border-danger' onChange={(e)=>setPhone(e.target.value)} value={phone}/>
            </InputContainer>
            <InputContainer>
                <label for='fn' class='text-success'>Flat no.,House no.,Building,Company</label>
                <input id='fn' type='text' class='border border-danger' onChange={(e)=>setFlat(e.target.value)} value={flat}/>
            </InputContainer>
            <InputContainer>
                <label for='area' class='text-success'>Area,colony</label>
                <input id='area' type='text' class='border border-danger' onChange={(e)=>setArea(e.target.value)} value={area}/>
            </InputContainer>
            <InputContainer>
                <label for='lm' class='text-success'>LandMark</label>
                <input id='lm' type='text' class='border border-danger' onChange={(e)=>setLandmark(e.target.value)} value={landmark}/>
            </InputContainer>
            <InputContainer>
                <label for='town' class='text-success'>Town/City</label>
                <input id='town' class='border border-danger' type='text' onChange={(e)=>setCity(e.target.value)} value={city}/>
            </InputContainer>
            <InputContainer>
                <label for='state' class='text-success'>State/Province</label>
                <input id='state' type='text' class='border border-danger' onChange={(e)=>setState(e.target.value)} value={state}/>
            </InputContainer>
            <button type="button" class="btn btn-danger" onClick={deliver}>Delivering Address</button> 
            </FormContainer>
        </Main>    
    </Container>

    <Footer style={{position:'relative',top:5+'em'}}/>
    </div>
  )
}
const Container=styled.div`
width:100%;
// max-width:800px;
// margin:auto;
position:relative;
`
const Main=styled.div`
padding:15px;
display:flex;
`
const Image=styled.div`
border:5px solid grey;
border-right:none;
margin-left:300px;
background:white;
img{
width:400px;
height:75vh;
}
`
const FormContainer=styled.form`
border:5px solid grey;
border-left:none;
width:500px;
min-width:400px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:15px;
background-color:#fff;
margin:auto;
margin-left:-20px;
`
const InputContainer=styled.div`
width:100%;
padding:5px;
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
export default Address