import React from 'react'
import {useStateValue} from '../StateProvider'
import { getBasketTotal } from '../reducer';
import Header from './headerComponent'
import Footer from './footerComponent'
import{useNavigate}from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import styled from 'styled-components'
import Card from './orderCard'

function UserOrder() {
    const navigate=useNavigate()
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket=(e,id)=> {
        e.preventDefault();
  
        dispatch({
          type:'REMOVE_FROM_BASKET',
          id:id
        })
      }
  return (
    <div> 
        <Header/>
        <Main>
            <ShopingCart>
                <div class='display:flex'>
                    <h2>My Cart</h2>
                    {
                        basket?.map((item)=>{
                            return(
                                <Card image={item.image} title={item.title} price={item.price} id={item.id}/>
                            )
                        })
                    }
                </div>
            </ShopingCart>
          
            <Subtotal>
            <CurrencyFormat renderText={(value)=>( 
                <div class='flex-column'>
                    <p>SubTotal({basket.length} items):
                        <strong>{value}</strong></p> 
                    <small class='display-flex flex-column'>
                        {/* <h4 style={{textTransform:'capitalize'}}></h4> */}
                        {/* <div class='flex-column'>
                        {
                            basket?.map((product)=>{
                                return(
                                    <ul class="list-group">
                                        <li class="list-group-item">{product.title}-₹{product.price}</li>
                                    </ul>
                                )
                            })
                        }
                        </div> */}
                        {/* <p style={{textTransform:'capitalize'}}>here is your order on left side</p> */}
                    </small>
                </div>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
            />
            <button onClick={()=>navigate('/address')}>Click Here To Checkout</button>
            </Subtotal>
            
        </Main>
        <div class="position-fixed bottom-0 mx-1">
          <Footer/>
        </div>
    </div>
  )
}
const Main=styled.div`
display:flex;
padding:15px;
`
const ShopingCart=styled.div`
padding:15px;
flex:0.7;

h2{
  font-weight:500;
  border-bottom:1px solid lightgray;
  padding-bottom:15px;
}
`;

const Subtotal=styled.div`
flex:0.3;
background-color:white;
margin-left:15px;
height:200px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

p{
  font-size:20px;
}
small{
  display:flex;
  align-items:center;
  margin-top:10px;

  span{
    margin-left:10px;
  }
}
button{
  width:65%;
  height:33px;
  margin-top:20px;
  background-color:#ffd814;
  outline:none;
}
`
const Product=styled.div`
disply:flex;
align-items:center;
border:2px solid green;
`
const Image=styled.div`
flex:0.3;
img{
  width:100%;
}
`
const Description= styled.div`
flex:0.7;
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
export default UserOrder