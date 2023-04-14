import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import axios from "../axios";
import Header from './headerComponent';
import Cart from './Products';
function ProductRegister() {
  const [item,setItem]=useState([]);
  const [query,setQuery]=useState("");

  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
    const prod=await axios.get('/all');
    console.log(prod.data.data);
    setItem(prod.data.data);
  }
  return (
    <div>
      <div class="position-fixed top-0 " style={{width:100+'vw'}}>
        <Header/>
      </div>
      <div class="container" style={{marginTop:70+'px'}}>
        <div class="row">
          <Search className="col-3 mt-1 mr-1 bg-white position-fixed">
            <form class="mt-2" onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="text" placeholder="Search for products" onChange={(e)=>setQuery(e.target.value.toLowerCase())} value={query}/>
            </form>
            <div>
              <Image>
                <img src='https://img.freepik.com/free-vector/store-staff-check-number-products-that-must-be-delivered-customers-during-day_1150-51079.jpg?size=626&ext=jpg&ga=GA1.2.722856608.1680434315&semt=ais'/> 
              </Image>
            </div>
          </Search>
          <div class="col-sm-8 offset-4 mt-1 mb-1"style={{rowGap:2}}>
            <div class='d-flex flex-wrap'>
              {
                item.filter((item)=>{
                  return query === '' ? item: item.title.includes(query);
                })
                .map((item)=>{
                  return(
                    <Cart id={item._id} title={item.title} price={item.price} image={item.image} description={item.description} quantity={item.quantity} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
const Image=styled.div`
margin-top:25px;
img{
width:300px;
height:50vh;}
`
const Search=styled.div`
border:5px solid #adb5bd;
width:330px;
height:65vh;

`
export default ProductRegister