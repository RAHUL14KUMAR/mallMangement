import React,{useState,useEffect} from 'react'
import Header from './headerComponent';
import Footer from './footerComponent';
import Cart from './saleCart';
import 'react-multi-carousel/lib/styles.css'; 
import styled from 'styled-components';
import {registers} from '../service/sales';

function SalesRegister() {
   const [item,setItem]=useState([]);


   useEffect(()=>{
    fetchData();
   },[])
   const fetchData=async()=>{
      const res=await registers();
      console.log(res.data.data);
      setItem(res.data.data);
   }
  return (
    <div>
      <div class="position-fixed top-0" style={{width:100+'vw',zIndex:1000}}>
        <Header/>
        </div>
      <Container>
        <div class='row'>

        <div class='col-sm-3'>
          <div>
            <img src='https://img.freepik.com/free-vector/online-shopping-concept_52683-63898.jpg?size=626&ext=jpg&ga=GA1.1.722856608.1680434315&semt=ais' style={{width:342+'px'}} />
          </div>
          <div>
            <img src='https://media.gettyimages.com/id/625064858/vector/cash-register-icon.jpg?s=612x612&w=0&k=20&c=txnj_Q63U86sPdP_qvOmjR-9UmdSxHYJ6f-PtcOmo74=' style={{width:342+'px' ,marginTop:5+'px'}}/>
          </div>
        </div>
        <div class='col-sm-8 mt-1 mb-1'style={{rowGap:2}}>
          <div class='d-flex flex-wrap'>
          {
            item.map(item=>(
              <Border>
                  {
                    item.product[0].map((product)=>(
                      <Cart image={product.image} title={product.title} price={product.price} date={item.createdAt}/>
                    ))
                  }
              </Border>
            ))
          }
          </div>
        </div>
        </div>
      </Container>
    </div>
  )
}
const Container=styled.div`
margin:25px;
margin-top:75px
`
const Border=styled.div`
border:2px solid white;
margin:5px;
padding:15px;
overflow:hidden
`
export default SalesRegister
