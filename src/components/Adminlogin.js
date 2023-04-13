import React,{useState} from 'react'
import{useNavigate}from 'react-router-dom'
import {adminLogin} from '../service/adminlogin'
import styled from 'styled-components'
import Header from './headerComponent'
import Footer from './footerComponent'
import './Admin.css'
function Admin() {
    const [seen,setSeen]=useState(false);
    const navigate=useNavigate();

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');

    const adminwork=async()=>{
      const resp=await adminLogin({username,password});
      console.log(resp);
      if(resp.data.message){
        alert("welcome sir");
        navigate('/register');
      }
      if(resp.config.name==='AxiosError'){
        alert('you are not the admin');
      }
    }
    console.log(username);
    console.log(password);
  return (
    <div class='login-form-container'>
      <Header/> 
      <h1 style={{textAlign:'center',marginTop:3+'em'}}>Admin Login</h1>
      <Container>
        <Main>
          <Image>
            <img src='https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?size=626&ext=jpg&ga=GA1.2.722856608.1680434315&semt=sph'/>

          </Image>
          <FormContainer>
            <InputContainer>
                <label for="fm" class='text-success'>UserName</label>
                <input  id="fm" type='text' class='border border-danger' placeholder='john smith' onChange={(e)=>setusername(e.target.value)} value={username}/>
            </InputContainer>
            <InputContainer>
                <label for="fm" class='text-success'>Password</label>
                <input  id="fm" type='password' class='border border-danger' onChange={(e)=>setpassword(e.target.value)} value={password}/>
            </InputContainer>
            
            <button type="button" class="btn btn-danger" onClick={adminwork}>see the register</button> 
          </FormContainer>
        </Main>    
    </Container>
    <div class="position-absolute bottom-0 mx-1">
    <Footer/>
    </div>
    
    </div>
  )
}
const Container=styled.div`
width:100%;
max-width:800px;
margin:auto;
position:relative;
`
const Main=styled.div`
padding:15px;
display:flex;
`
const Image=styled.div`
border:5px solid grey;
img{
    width:300px;
    height:240px;
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
background:transparent;
margin:auto;
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
export default Admin
