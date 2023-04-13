import React,{useState} from 'react'
import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom';
import {signupUsers} from '../service/signupUser';
import Header from './headerComponent'
import Footer from './footerComponent'
import './Admin.css'


const def2={
    username:"",
    email:"",
    password:""
}
function SignupPage() {
    const navigate=useNavigate();
    const [signup,setSignUp]=useState(def2);
    const onValueChange=(e)=>{
        setSignUp({...signup,[e.target.name]:e.target.value})
        console.log(signup);
    }
    const signupu=async()=>{
        let res=await signupUsers(signup);
        console.log(res);
        if(res.data.message){
            alert(res.data.message);
            navigate('/login');
        }
        // if(!res.data.message.length()==0){
        //     alert("wrong credentials putted")
        // }
    }
  return (
    <div class='login-form-container'>
    <Header/> 
    <h1 style={{textAlign:'center',marginTop:3+'em'}}>User SignUp</h1>
    <Container>
      <Main>
      <Image>
            <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?size=626&ext=jpg&ga=GA1.1.722856608.1680434315&semt=sph' />
        </Image>
          <FormContainer>
          <InputContainer>
              <label for="fm" class='text-success'>UserName</label>
              <input  id="fm" type='text' class='border border-danger' placeholder='john smith' name="username" onChange={onValueChange}/>
          </InputContainer>
          <InputContainer>
              <label for="fm" class='text-success'>Email</label>
              <input  id="fm" type='email' class='border border-danger' placeholder='register email only'name="email" onChange={onValueChange}/>
          </InputContainer>
          <InputContainer>
              <label for="fm" class='text-success'>Password</label>
              <input  id="fm" type='text' class='border border-danger'  name="password" onChange={onValueChange}/>
          </InputContainer>
          <button type="button" class="btn btn-success mx-3"onClick={signupu}>signup</button> 
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
    height:320px;
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
export default SignupPage
