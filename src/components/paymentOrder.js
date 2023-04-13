import React,{useState,useEffect} from 'react'
import { useStateValue } from '../StateProvider'
import styled from 'styled-components'
import {getBasketTotal} from '../reducer'
import CurrencyFormat from 'react-currency-format'
import {useNavigate} from 'react-router-dom'
import Header from './headerComponent';
import Footer from './footerComponent';
import displayRazorpay from "../utils/PaymentGateway";
import {register} from '../service/sales';

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
function PaymentOrder() {
  const navigate=useNavigate();
  const[{address,basket,user},dispatch]=useStateValue();

  console.log(getBasketTotal(basket));
  const payment=async()=>{
    alert('activate cash on delivery payment');
    post();
    navigate('/');
    dispatch({
      type:"EMPTY_ADDRESS"
    })
    // window.location.reload();
  }
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });
  const post=async()=>{
    const resp=await register([basket]);
    console.log(resp);
  }
  return (
    <Container>
      <div class="position-fixed top-0"  style={{width:100+'vw',zIndex:1000}}>
        <Header/>
        </div>
      <Main style={{marginTop:25+'px'}}>
        <ReviewContainer>
          <h2 style={{textAlign:'center'}}>Review my Order</h2>
            <AddressContainer>
              <h5 style={{textDecoration:'underLine'}}>Shipping Address</h5>
              <div style={{display:'flex'}}>
                <Detail>
                <p><span>FullName:</span>&nbsp;{address.fullName}</p>
                <p>{address.flat}</p>
                <p>LandMark:&nbsp;{address.landmark}</p>
                <p>{address.city} {address.state}</p>
                <p>phone:&nbsp;{address.phone}</p>
                </Detail>
                <Div>
                  <img src='https://thumbs.dreamstime.com/b/young-asian-woman-writing-down-customer-s-details-addresses-clipboard-order-to-prepare-shipping-according-217551460.jpg' style={{width:350+'px'}}/>
                </Div>
              </div>
          </AddressContainer>
          <OrderContainer>
            <h4>Your Order</h4>
            <div>
              {
                basket?.map((product)=>{
                  return(
                  <Product>
                    <Image>
             +         <img src={product.image}/>
                    </Image>
                    <Description style={{left:16+'rem'}}>
                      <h4>{product.title}</h4>
                      <p>₹ {product.price}</p>
                    </Description>
                  </Product>
                  )
                })
              }
            </div>
          </OrderContainer>
        </ReviewContainer>
        <Subtotal>
          <CurrencyFormat renderText={(value)=>( 
            <>
              <p class='position-fixed' style={{textAlign:'center',fontWeight:'bold',marginLeft:90+'px'}}>SubTotal({basket.length} items):
              <strong>{value}</strong></p> 
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType="text"
          thousandSeparator={true}
          prefix={"₹ "}
          />
          <br/>
          <div style={{display:'flex',zIndex:1000,marginTop:15+'px'}} class='position-fixed'>
            <button type="button" class="btn btn-success" onClick={displayRazorpay} style={{marginLeft:45+'px'}}>proceed to payment</button>
            <button type="button" class="btn btn-danger" onClick={payment} style={{marginLeft:5+'px'}}>cash on delivery</button>
          </div>
          <img class='position-fixed my-5' src='https://static.vecteezy.com/system/resources/thumbnails/002/934/620/small_2x/salary-payment-isometric-color-illustration-accounting-and-audit-saving-money-revenue-increase-banking-annual-bonus-payout-payday-people-receiving-wage-3d-concept-isolated-on-white-vector.jpg'/>
        </Subtotal>
      </Main>
      <div class="position-fixed bottom-0 mx-1">
          <Footer/>
      </div>
    </Container>
  )
}
const Container=styled.div`
width:100%;
// max-width:850px;
background-color:rgb(234,237,237);
`
const Small=styled.small`
display:flex;
margin-left:9em;
font-weight:bold;
`
const Detail=styled.div`
font-weight:bold;

`
const Div=styled.div`
border:5px solid grey;
position:relative;
left:185px;
`
const Main=styled.div`
padding:15px;
display:flex;
`
const ReviewContainer=styled.div`
background-color:#fff;
flex:0.7;
padding:15px;
margin:25px;
h2{
    font-weight:500;
    border-bottom:1px solid lightgray;
    padding-bottom:15px;
}
`
const Subtotal=styled.div`
flex:0.3;
background-color:white;
margin:25px;
// height:900px
`
const AddressContainer=styled.div`
margin-top:20px;
div{
    margin-top:10px;
    margin-left:10px;

    p{
        font-size:15px;
        margin-top:4px;
    }
}
`
const OrderContainer=styled.div`

width:550px;
margin-top:15px;
margin-left:15px;
`
const Product=styled.div`
display:flex;
align-items:center; 
margin:2px; 
`
const Image=styled.div`
flex:0.3;
// border:4px solid grey;
img{
  width:50%;
}
`
const Description= styled.div`
flex:0.7;
width:250px;
// border:5px solid grey;
position:relative;
h4{
  font-weight:600;
  font-size:18px;
}
p{
  font-weight:600px;
  margin-top:10px;
}
button{
  background-color:transparent;
  color:#1384b4;
  outline:none;
  margin-top:10px;
  cursor:pointer;
  &:hover{
    text-decoration:underline;
  }
}
`
export default PaymentOrder
