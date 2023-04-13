import React,{useEffect,useState} from 'react'
import Header from './headerComponent';
import Footer from './footerComponent';
import axios from '../axios'
import styled from 'styled-components';
import Cart from './deleteCart';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 


const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
  }
};
function DeleteProduct() {
  const [id,setId]=useState("");
  const [item,setItem]=useState([]);

  useEffect(()=>{
    fetchData();
},[])
const fetchData=async()=>{
    const product=await axios.get('/all');
    console.log(product.data.data);
    setItem(product.data.data);
}
const remove=()=>{
  const index=item.findIndex(element=>element._id===id);
  if(index>=0){
    item.splice(index,1);
    alert("we delete the item");
  }
}
  return (
    <Contain>
      <Header/>
      <Container>
        <Flex>
          <Box>
            <form style={{margin:'auto',padding:15+'px'}} >
              <label for='id' class='text-success'>OBJECT ID:</label>
              <input id="id" type='text' class='border border-danger' placeholder='objectId'value={id} onChange={(e)=>setId(e.target.value)} />
              <button type="button" style={{marginLeft:2+'px',marginTop:10+'px'}} class="btn btn-success" onClick={remove}>Delete Product</button> 
            </form>
            <img src='https://th.bing.com/th?id=OIP.xB3q5BVA5wyKFXruRbxLEQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' style={{width:200+'px',marginLeft:85+'px'}} />
          </Box>
          <Box>
          <Carousel swipeable={true} infinite={true}
        draggable={false} showDots={false} autoPlay={true}
        responsive={responsive} autoPlaySpeed={7000}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container">
       {
        item.map(item=>(
            <Cart id={item._id} title={item.title} image={item.image}/>
        ))
       }
    </Carousel>
          </Box>
        </Flex>
      </Container>
      <Footer/>
    </Contain>
  )
}
const Contain=styled.div`
  height:100vh;
  width:100vw;
`
const Container=styled.div`
margin-top:4em;
 margin-bottom:2.85em;
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
  height:22em;
  border:5px solid grey;
  margin-top:3em;
  margin-left:7em;
  background-color:white;
  transition:0.5s;
  &:hover{
    scale:1.05;
    cursor:pointer
  }
  flex-direction:column
 `
export default DeleteProduct