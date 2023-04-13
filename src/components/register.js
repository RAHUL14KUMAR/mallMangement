 import React from 'react'
 import { useNavigate } from 'react-router-dom';
 import styled from 'styled-components'
 import Header from './headerComponent';
 import Footer from './footerComponent';
 function Register() {
  const navigate=useNavigate();
  const add=()=>{
    navigate('/add');
  }
  const remove=()=>{
    navigate('/delete');
  }
  const sales=()=>{
    navigate('/sales');
  }
  const product=()=>{
    navigate('/prod')
  }
   return (

    <Contain>
      <Header/>
      <Container>
        <Flex>
          <Box class='bg-white'>
            <img src='https://th.bing.com/th/id/OIP.1hjsoc4bMsAjOn2IUmA90wHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3' style={{width:18+'em',height:8+'em',marginLeft:3+'em'}}/>
            <button type="button" class="btn btn-success" style={{marginLeft:5+'em',marginTop:2+'px'}} onClick={add}>Add Product In The List</button>
          </Box>
          <Box class='bg-white'>
            <img src='https://th.bing.com/th/id/OIP.apm5l-chgr9mL6alcUB3VAHaFj?pid=ImgDet&w=185&h=138&c=7&dpr=1.3' style={{width:18+'em',height:8+'em',marginLeft:4+'em'}}/>
            <button type="button" onClick={remove} class="btn btn-success" style={{marginLeft:5+'em',marginTop:4+'px'}}>Remove A Particular Product</button>
          </Box>
        </Flex>
        <Flex>
          <Box class='bg-white'>
            <img src='https://th.bing.com/th/id/OIP.6jtLGglXjp19Aqqe-uTFfQHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3' style={{width:12+'em',height:8+'em',marginLeft:6+'em',marginTop:2+'px'}}/>
            <button type="button" class="btn btn-success" style={{marginLeft:8+'em',marginTop:4+'px'}} onClick={product}>Product Register</button>
          </Box>
          <Box class='bg-white'>
            <img src='https://th.bing.com/th/id/OIP.Epo21qj2w-YUcgZ497ldOwHaFj?pid=ImgDet&w=185&h=138&c=7&dpr=1.3' style={{width:18+'em',height:8+'em',marginLeft:3+'em'}}/>
            <button type="button" class="btn btn-success" style={{marginLeft:8+'em',marginTop:2+'px'}} onClick={sales}>Sales Register</button>
          </Box>
        </Flex>
      </Container>
    </Contain>
   )
 }
 const Contain=styled.div`
 height:100vh;
 width:100vw;
 `
 const Container=styled.div`
 margin-top:4em;
 margin-bottom:2em;
 margin-left:15em;
 width:70em;
 height:32em;
 `
 const Flex=styled.div`
  display:flex;
  margin-right:5em;
 `
 const Box=styled.div`
  width:35em;
  height:12em;
  border:5px solid grey;
  margin-top:3em;
  margin-left:7em;
  background-color:white;
  transition:0.5s;
  &:hover{
    scale:1.05;
    cursor:pointer
  }
 `
 export default Register