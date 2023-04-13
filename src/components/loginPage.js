import React,{useState} from 'react'
import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom';
import {loginUser} from '../service/login'
import Header from './headerComponent'
import Footer from './footerComponent'
import { useStateValue } from "../StateProvider";
import './Admin.css'


const def={
    email:"",
    password:""
}
function LoginPage() {
    const navigate=useNavigate();
    // const [seen,setSeen]=useState(false);
    const [username,setUsername]=useState("");
    const [login,setLogin]=useState(def);
    const [{}, dispatch] = useStateValue();

    const onInputChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
        console.log(login);
    }
    const loginuser=async()=>{
        let res=await loginUser(login);
        console.log("hiiiiiii",res.data);
        if(res.data.message.length>0 ){
            alert("you are logged in")
            dispatch({
                type: "SET_USER",
                user: res.data
            });
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/");

        }
        if(res.data.message.length===0){
            alert("not register user");
        }
    }
    
    const signup=()=>{
        navigate('/signup');
    }
    // console.log(username);
    return(
    <div class='login-form-container'>
    <Header/> 
    <h1 style={{textAlign:'center',marginTop:3+'em'}}>User Login</h1>
    <Container>
      <Main>
        <Image>
            <img src='https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?size=626&ext=jpg&ga=GA1.1.722856608.1680434315&semt=sph' />
        </Image>
          <FormContainer>
          <InputContainer>
              <label for="fm" class='text-success'>UserName</label>
              <input  id="fm" type='text' class='border border-danger' placeholder='john smith' value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </InputContainer>
          <InputContainer>
              <label for="fm" class='text-success'>Email</label>
              <input  id="fm" type='text' class='border border-danger' placeholder='register email only' onChange={onInputChange} name="email"/>
          </InputContainer>
          <InputContainer>
              <label for="fm" class='text-success'>Password</label>
              <input  id="fm" type='text' class='border border-danger' onChange={onInputChange} name="password"/>
          </InputContainer>
          <div class='d-flex'>
          <button type="button" class="btn btn-danger" onClick={loginuser}>login</button>
          <button type="button" class="btn btn-success mx-3"onClick={signup}>NewUser</button> 
          </div>
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
export default LoginPage
