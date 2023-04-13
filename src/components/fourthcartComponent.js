import React,{useState,useEffect} from 'react'
import Cart from './cart';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import axios from '../axios'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
};
function FourthcartComponent() {
    const [item,setItem]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        const prod=await axios.get('/fashion');
        console.log(prod.data.data);
        setItem(prod.data.data);
    }

    return (
      <div style={{marginBottom:70+'px'}}>
          <h3 className='text-white text-center text-bg-danger mt-2'>FASHION</h3>
          <Carousel swipeable={false} infinite={true}
        draggable={false} showDots={false} autoPlay={true}
        responsive={responsive} autoPlaySpeed={9000}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container">
          {
              item.map((item)=>{
                  return(
                <Cart id={item.id} title={item.title} price={item.price} image={item.image} description={item.description}/>
                  )
              })
          }
        </Carousel>
      </div>
    )
}

export default FourthcartComponent
