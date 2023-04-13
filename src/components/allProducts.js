import React ,{useState,useEffect}from 'react'
import styled from 'styled-components';
import Header from './headerComponent';
import Footer from './footerComponent';
import Cart from './product';
import axios from '../axios'
function AllProducts() {
    const [item,setItem]=useState([]);
    const [query,setQuery]=useState("");

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData=async()=>{
        const product=await axios.get('/all');
        console.log(product.data.data);
        setItem(product.data.data);
    }
    console.log(query);
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
                <div className='filter-with-product'>
                    <Image>
                       <img src='https://img.freepik.com/free-vector/web-search-concept-illustration_114360-4767.jpg?size=626&ext=jpg&ga=GA1.1.722856608.1680434315&semt=sph'/> 
                    </Image>
                </div>
                </Search>
                <div class="col-sm-8 offset-4 mt-1 mb-1"style={{rowGap:2}}>
                    <div class='d-flex flex-wrap'>
                    {
                        item.filter((item)=>{
                            return query === ''
                            ? item
                            : item.title.includes(query);
                        })
                            .map((item)=>{
                            return(
                          <Cart id={item.id} title={item.title} price={item.price} image={item.image} description={item.description} />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        <div class="position-fixed bottom-0 mx-1">
          <Footer/>
        </div>
    </div>
  )
}
const Search=styled.div`
border:5px solid #adb5bd;
width:330px;
height:65vh;

`
const Image=styled.div`
margin-top:25px;
img{
width:300px;
height:50vh;}
`
export default AllProducts